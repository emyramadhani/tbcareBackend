const Obat = require('../models/medicine');
const MedicineHistory = require('../models/medicine-history');
const { successResponse, errorResponse } = require('../utils/response');

const getJadwalHariIni = async (req, res) => {
  try {

    const hariIni = new Date();
    const awalHari = new Date(hariIni);
    awalHari.setHours(0, 0, 0, 0);
    const akhirHari = new Date(hariIni);
    akhirHari.setHours(23, 59, 59, 999);

    const semuaObat = await Obat.find({
      id_user: req.userId,
      aktif: true,
    }).sort({ createdAt: -1 });

    if (semuaObat.length === 0) {
      return successResponse(res, 'Berhasil mengambil jadwal hari ini', {
        tanggal: awalHari.toISOString().split('T')[0],
        progress: {
          sudah_minum: 0,
          total_obat: 0,
          persentase: 0,
        },
        obat_berikutnya: [],
        semua_obat: [],
      });
    }

    const riwayatHariIni = await MedicineHistory.find({
      id_user: req.userId,
      tanggal: { $gte: awalHari, $lte: akhirHari },
      status_minum: true,
    });

    const sudahMinumSet = new Set(
      riwayatHariIni.map((r) => r.id_obat.toString())
    );

    const semuaObatDenganStatus = semuaObat.map((obat) => {
      const sudahMinum = sudahMinumSet.has(obat._id.toString());
      const riwayat = riwayatHariIni.find(
        (r) => r.id_obat.toString() === obat._id.toString()
      );

      return {
        _id: obat._id,
        nama_obat: obat.nama_obat,
        dosis: obat.dosis,
        waktu_minum: obat.waktu_minum,
        sudah_minum: sudahMinum,
        waktu_konfirmasi: sudahMinum ? riwayat.waktu_konfirmasi : null,
      };
    });

    const obatBerikutnya = semuaObatDenganStatus.filter(
      (obat) => !obat.sudah_minum
    );

    const totalObat = semuaObat.length;
    const sudahMinum = sudahMinumSet.size;
    const persentase =
      totalObat > 0 ? Math.round((sudahMinum / totalObat) * 100) : 0;

    return successResponse(res, 'Berhasil mengambil jadwal hari ini', {
      tanggal: awalHari.toISOString().split('T')[0],
      progress: {
        sudah_minum: sudahMinum,
        total_obat: totalObat,
        persentase: persentase,
      },
      obat_berikutnya: obatBerikutnya,
      semua_obat: semuaObatDenganStatus,
    });
  } catch (err) {
    console.error('ERROR DETAIL:', err);
    return errorResponse(res, 'Server error', 500);
  }
};

module.exports = { getJadwalHariIni };