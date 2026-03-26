const mongoose = require('mongoose');
const SkriningPertanyaan = require('../models/screening-question');
const Skrining = require('../models/screening');
const SkriningDetail = require('../models/screening-detail');
const { classifyRisk } = require('../utils/risk-classifier');
const { successResponse, errorResponse } = require('../utils/response');

const submitScreening = async (req, res) => {
  try {
    const { jawaban } = req.body;


    if (!jawaban || !Array.isArray(jawaban) || jawaban.length === 0) {
      return errorResponse(
        res,
        'Jawaban wajib diisi dalam bentuk array',
        400
      );
    }

    const pertanyaanAktif = await SkriningPertanyaan.find({ aktif: true });

    if (jawaban.length !== pertanyaanAktif.length) {
      return errorResponse(
        res,
        `Jumlah jawaban harus ${pertanyaanAktif.length}, diterima ${jawaban.length}`,
        400
      );
    }

    const idPertanyaanAktif = new Set(
      pertanyaanAktif.map((p) => p._id.toString())
    );

    for (const item of jawaban) {
      if (!item.id_pertanyaan || !item.jawaban) {
        return errorResponse(
          res,
          'Setiap jawaban harus memiliki id_pertanyaan dan jawaban',
          400
        );
      }

      if (!['Ya', 'Tidak'].includes(item.jawaban)) {
        return errorResponse(
          res,
          `Jawaban tidak valid: "${item.jawaban}". Harus "Ya" atau "Tidak"`,
          400
        );
      }

      if (!idPertanyaanAktif.has(item.id_pertanyaan.toString())) {
        return errorResponse(
          res,
          `ID pertanyaan tidak valid: ${item.id_pertanyaan}`,
          400
        );
      }
    }

    const total_skor = jawaban.filter((item) => item.jawaban === 'Ya').length;

    const { hasil_risiko, rekomendasi } = classifyRisk(total_skor);

    const skrining = await Skrining.create({
      id_user: req.userId,
      total_skor,
      hasil_risiko,
      rekomendasi,
      tanggal_skrining: new Date(),
    });

    const detailDocs = jawaban.map((item) => ({
      id_skrining: skrining._id,
      id_pertanyaan: item.id_pertanyaan,
      jawaban: item.jawaban,
      skor: item.jawaban === 'Ya' ? 1 : 0,
    }));

    await SkriningDetail.insertMany(detailDocs);

    return successResponse(
      res,
      'Skrining berhasil disimpan',
      {
        id_skrining: skrining._id,
        total_skor: skrining.total_skor,
        hasil_risiko: skrining.hasil_risiko,
        rekomendasi: skrining.rekomendasi,
        tanggal_skrining: skrining.tanggal_skrining,
      },
      201
    );
  } catch (err) {
    console.error('ERROR submitScreening:', err);
    return errorResponse(res, 'Server error', 500);
  }
};

const getScreeningHistory = async (req, res) => {
  try {
    const riwayat = await Skrining.find({ id_user: req.userId })
      .select('total_skor hasil_risiko tanggal_skrining createdAt') 
      .sort({ createdAt: -1 });

    return successResponse(
      res,
      'Berhasil mengambil riwayat skrining',
      riwayat
    );
  } catch (err) {
    console.error('ERROR getScreeningHistory:', err);
    return errorResponse(res, 'Server error', 500);
  }
};

const getScreeningDetail = async (req, res) => {
  try {
    // Validasi format ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return errorResponse(res, 'ID skrining tidak valid', 400);
    }

    const skrining = await Skrining.findOne({
      _id: req.params.id,
      id_user: req.userId,
    }).select('-__v');

    if (!skrining) {
      return errorResponse(res, 'Skrining tidak ditemukan', 404);
    }

    const detailJawaban = await SkriningDetail.find({
      id_skrining: skrining._id,
    })
      .populate('id_pertanyaan', 'pertanyaan urutan bobot_skor')
      .select('-__v')
      .sort({ 'id_pertanyaan.urutan': 1 });

    return successResponse(res, 'Berhasil mengambil detail skrining', {
      skrining,
      detail_jawaban: detailJawaban,
    });
  } catch (err) {
    console.error('ERROR getScreeningDetail:', err);
    return errorResponse(res, 'Server error', 500);
  }
};

module.exports = { submitScreening, getScreeningHistory, getScreeningDetail };