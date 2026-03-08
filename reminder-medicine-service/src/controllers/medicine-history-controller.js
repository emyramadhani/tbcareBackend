const { validationResult } = require('express-validator');
const MedicineHistory = require('../models/medicine-history');
const Obat = require('../models/medicine');
const { successResponse, errorResponse } = require('../utils/response');

// ── POST /api/riwayat-obat ──
const confirmMedicine = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, 'Validasi gagal', 400, errors.array());
  }

  try {
    const { id_obat, tanggal } = req.body;

    const obat = await Obat.findOne({
      _id: id_obat,
      id_user: req.userId,
      aktif: true,
    });

    if (!obat) {
      return errorResponse(res, 'Obat tidak ditemukan', 404);
    }

    const tanggalNormalized = new Date(tanggal);
    tanggalNormalized.setHours(0, 0, 0, 0);

    const existing = await MedicineHistory.findOne({
      id_obat,
      tanggal: tanggalNormalized,
    });

    if (existing) {
      return errorResponse(
        res,
        'Obat ini sudah dikonfirmasi untuk tanggal tersebut',
        409
      );
    }

    const history = await MedicineHistory.create({
      id_obat,
      id_user: req.userId,
      tanggal: tanggalNormalized,
      status_minum: true,
      waktu_konfirmasi: new Date(),
    });

    return successResponse(res, 'Konfirmasi minum obat berhasil', history, 201);
  } catch (err) {

    if (err.code === 11000) {
      return errorResponse(
        res,
        'Obat ini sudah dikonfirmasi untuk tanggal tersebut',
        409
      );
    }
    return errorResponse(res, 'Server error', 500);
  }
};


const getMedicineHistory = async (req, res) => {
  try {
    const { dari, sampai, id_obat } = req.query;

    const filter = { id_user: req.userId };

    if (dari || sampai) {
      filter.tanggal = {};
      if (dari) {
        const tanggalDari = new Date(dari);
        tanggalDari.setHours(0, 0, 0, 0);
        filter.tanggal.$gte = tanggalDari;
      }
      if (sampai) {
        const tanggalSampai = new Date(sampai);
        tanggalSampai.setHours(23, 59, 59, 999);
        filter.tanggal.$lte = tanggalSampai;
      }
    }

    if (id_obat) {
      filter.id_obat = id_obat;
    }

    const history = await MedicineHistory.find(filter)
      .populate('id_obat', 'nama_obat dosis waktu_minum')
      .sort({ tanggal: -1 });

    const totalRecord = history.length;
    const totalMinum = history.filter((h) => h.status_minum === true).length;
    const persentaseKepatuhan =
      totalRecord > 0
        ? Math.round((totalMinum / totalRecord) * 100)
        : 0;

    return successResponse(res, 'Berhasil mengambil riwayat minum obat', {
      persentase_kepatuhan: persentaseKepatuhan,
      total_record: totalRecord,
      total_minum: totalMinum,
      riwayat: history,
    });
  } catch (err) {
    console.error('ERROR DETAIL:', err);
    return errorResponse(res, 'Server error', 500);
  }
};

module.exports = { confirmMedicine, getMedicineHistory };