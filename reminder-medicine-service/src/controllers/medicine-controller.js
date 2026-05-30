const { validationResult } = require("express-validator");
const Obat = require("../models/medicine");
const MedicineHistory = require("../models/medicine-history");
const { successResponse, errorResponse } = require("../utils/response");

// ── POST /api/obat ───────────────────────────────────────────────
const createObat = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validasi gagal", 400, errors.array());
  }

  try {
    const { nama_obat, dosis, waktu_minum } = req.body || {};

    if (!nama_obat || !dosis || !waktu_minum) {
      return errorResponse(
        res,
        "Nama obat, dosis, dan waktu minum wajib diisi",
        400,
      );
    }

    const obat = await Obat.create({
      id_user: req.userId,
      nama_obat,
      dosis,
      waktu_minum,
      // deletedAt otomatis null (default) → obat langsung aktif
    });

    return successResponse(res, "Obat berhasil ditambahkan", obat, 201);
  } catch (err) {
    console.error("ERROR createObat:", err);

    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return errorResponse(res, `Validasi gagal: ${messages.join(", ")}`, 400);
    }

    return errorResponse(res, "Server error", 500);
  }
};

// ── GET /api/obat ────────────────────────────────────────────────
const getAllObat = async (req, res) => {
  try {
    // SOFT DELETE: ganti 'aktif: true' → 'deletedAt: null'
    const obatList = await Obat.find({
      id_user: req.userId,
      deletedAt: null,
    }).sort({ createdAt: -1 });

    return successResponse(res, "Berhasil mengambil data obat", obatList);
  } catch (err) {
    console.error("ERROR getAllObat:", err);
    return errorResponse(res, "Server error", 500);
  }
};

// ── GET /api/obat/:id ────────────────────────────────────────────
const getObatById = async (req, res) => {
  try {
    // SOFT DELETE: ganti 'aktif: true' → 'deletedAt: null'
    const obat = await Obat.findOne({
      _id: req.params.id,
      id_user: req.userId,
      deletedAt: null,
    });

    if (!obat) {
      return errorResponse(res, "Obat tidak ditemukan", 404);
    }

    return successResponse(res, "Berhasil mengambil detail obat", obat);
  } catch (err) {
    console.error("ERROR getObatById:", err);

    if (err.name === "CastError" && err.kind === "ObjectId") {
      return errorResponse(res, "Format ID obat tidak valid", 400);
    }

    return errorResponse(res, "Server error", 500);
  }
};

// ── PUT /api/obat/:id ────────────────────────────────────────────
const updateObat = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validasi gagal", 400, errors.array());
  }

  try {
    const { nama_obat, dosis, waktu_minum } = req.body || {};

    // SOFT DELETE: ganti 'aktif: true' → 'deletedAt: null'
    const obat = await Obat.findOneAndUpdate(
      {
        _id: req.params.id,
        id_user: req.userId,
        deletedAt: null,
      },
      { nama_obat, dosis, waktu_minum },
      { returnDocument: "after", runValidators: true },
    );

    if (!obat) {
      return errorResponse(res, "Obat tidak ditemukan", 404);
    }

    return successResponse(res, "Obat berhasil diperbarui", obat);
  } catch (err) {
    console.error("ERROR updateObat:", err);

    if (err.name === "CastError" && err.kind === "ObjectId") {
      return errorResponse(res, "Format ID obat tidak valid", 400);
    }
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return errorResponse(res, `Validasi gagal: ${messages.join(", ")}`, 400);
    }

    return errorResponse(res, "Server error", 500);
  }
};

// ── DELETE /api/obat/:id ─────────────────────────────────────────
// SOFT DELETE: obat TIDAK benar-benar dihapus dari database.
// Hanya field deletedAt diisi dengan tanggal sekarang.
// Data riwayat minum obat (MedicineHistory) TETAP tersimpan.
const deleteObat = async (req, res) => {
  try {
    // Cari obat yang masih aktif (belum di-soft-delete)
    const obat = await Obat.findOne({
      _id: req.params.id,
      id_user: req.userId,
      deletedAt: null,
    });

    if (!obat) {
      return errorResponse(res, "Obat tidak ditemukan", 404);
    }

    // Tandai sebagai dihapus → isi deletedAt dengan waktu sekarang
    obat.deletedAt = new Date();
    await obat.save();

    // CATATAN: MedicineHistory TIDAK ikut dihapus.
    // Riwayat tetap ada sebagai data historis kepatuhan minum obat.

    return successResponse(res, "Obat berhasil dihapus");
  } catch (err) {
    console.error("ERROR deleteObat:", err);

    if (err.name === "CastError" && err.kind === "ObjectId") {
      return errorResponse(res, "Format ID obat tidak valid", 400);
    }

    return errorResponse(res, "Server error", 500);
  }
};

module.exports = {
  createObat,
  getAllObat,
  getObatById,
  updateObat,
  deleteObat,
};
