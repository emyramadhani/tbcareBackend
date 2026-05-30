const fs = require("fs");
const path = require("path");
const Konten = require("../models/content");
const { successResponse, errorResponse } = require("../utils/response");

const BASE_URL =
  process.env.BASE_URL || `http://localhost:${process.env.PORT || 3002}`;

// ── Helper: hapus file video dari disk ──────────────────────────
const hapusFileVideo = (filename) => {
  if (!filename) return;
  const namaFile = path.basename(filename);
  const filePath = path.join(__dirname, "../../uploads/videos", namaFile);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};

// ── GET /api/konten ──────────────────────────────────────────────
const getAllKonten = async (req, res) => {
  try {
    const { tipe, kategori } = req.query;

    // ── SOFT DELETE: hanya tampilkan konten yang belum dihapus ──
    const filter = { deletedAt: null };
    // ────────────────────────────────────────────────────────────

    if (tipe) {
      if (!["artikel", "video"].includes(tipe)) {
        return errorResponse(
          res,
          "Tipe tidak valid. Gunakan artikel atau video.",
          400,
        );
      }
      filter.tipe = tipe;
    }

    if (kategori) {
      if (
        !["aktivitas", "olahraga", "nutrisi", "motivasi"].includes(kategori)
      ) {
        return errorResponse(res, "Kategori tidak valid.", 400);
      }
      filter.kategori = kategori;
    }

    const konten = await Konten.find(filter)
      .select("-__v")
      .sort({ createdAt: -1 });

    return successResponse(res, "Berhasil mengambil konten edukasi", konten);
  } catch (err) {
    console.error("ERROR getAllKonten:", err);
    return errorResponse(res, "Server error", 500);
  }
};

// ── GET /api/konten/:id ──────────────────────────────────────────
const getKontenById = async (req, res) => {
  try {
    // ── SOFT DELETE: hanya tampilkan konten yang belum dihapus ──
    const konten = await Konten.findOne({
      _id: req.params.id,
      deletedAt: null,
    }).select("-__v");
    // ────────────────────────────────────────────────────────────

    if (!konten) {
      return errorResponse(res, "Konten tidak ditemukan", 404);
    }

    return successResponse(res, "Berhasil mengambil detail konten", konten);
  } catch (err) {
    console.error("ERROR getKontenById:", err);
    if (err.name === "CastError" && err.kind === "ObjectId") {
      return errorResponse(res, "Format ID konten tidak valid", 400);
    }
    return errorResponse(res, "Server error", 500);
  }
};

// ── POST /api/konten ─────────────────────────────────────────────
const createKonten = async (req, res) => {
  try {
    const { judul, deskripsi, tipe, kategori, isi } = req.body || {};

    if (!judul || !tipe) {
      if (req.file) hapusFileVideo(req.file.filename);
      return errorResponse(res, "Judul dan tipe wajib diisi", 400);
    }

    if (!["artikel", "video"].includes(tipe)) {
      if (req.file) hapusFileVideo(req.file.filename);
      return errorResponse(res, "Tipe harus artikel atau video", 400);
    }

    if (tipe === "artikel" && !isi) {
      return errorResponse(
        res,
        "Isi artikel wajib diisi untuk konten bertipe artikel",
        400,
      );
    }

    if (tipe === "video" && !req.file) {
      return errorResponse(
        res,
        "File video wajib diupload untuk konten bertipe video",
        400,
      );
    }

    const url_video = req.file
      ? `${BASE_URL}/videos/${req.file.filename}`
      : null;

    const konten = await Konten.create({
      judul,
      deskripsi: deskripsi || null,
      tipe,
      kategori: kategori || null,
      isi: tipe === "artikel" ? isi : null,
      url_video: tipe === "video" ? url_video : null,
    });

    return res.status(201).json({
      success: true,
      message: "Konten berhasil ditambahkan",
      data: konten,
      debug: { file_size_bytes: req.file ? req.file.size : 0 },
    });
  } catch (err) {
    if (req.file) hapusFileVideo(req.file.filename);
    console.error("ERROR createKonten:", err);
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return errorResponse(res, `Validasi gagal: ${messages.join(", ")}`, 400);
    }
    return errorResponse(res, "Server error", 500);
  }
};

// ── PUT /api/konten/:id ──────────────────────────────────────────
const updateKonten = async (req, res) => {
  try {
    // ── SOFT DELETE: hanya update konten yang belum dihapus ──
    const konten = await Konten.findOne({
      _id: req.params.id,
      deletedAt: null,
    });
    // ──────────────────────────────────────────────────────────

    if (!konten) {
      if (req.file) hapusFileVideo(req.file.filename);
      return errorResponse(res, "Konten tidak ditemukan", 404);
    }

    const { judul, deskripsi, kategori, isi } = req.body || {};

    if (req.file && konten.url_video) {
      hapusFileVideo(konten.url_video);
    }

    if (judul !== undefined) konten.judul = judul;
    if (deskripsi !== undefined) konten.deskripsi = deskripsi;
    if (kategori !== undefined) konten.kategori = kategori;

    if (konten.tipe === "artikel" && isi !== undefined) {
      konten.isi = isi;
    }

    if (konten.tipe === "video" && req.file) {
      konten.url_video = `${BASE_URL}/videos/${req.file.filename}`;
    }

    await konten.save();

    return successResponse(res, "Konten berhasil diperbarui", konten);
  } catch (err) {
    if (req.file) hapusFileVideo(req.file.filename);
    console.error("ERROR updateKonten:", err);
    if (err.name === "CastError" && err.kind === "ObjectId") {
      return errorResponse(res, "Format ID konten tidak valid", 400);
    }
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return errorResponse(res, `Validasi gagal: ${messages.join(", ")}`, 400);
    }
    return errorResponse(res, "Server error", 500);
  }
};

// ── DELETE /api/konten/:id ───────────────────────────────────────
// SOFT DELETE: konten tidak benar-benar dihapus dari database,
// hanya ditandai dengan deletedAt = tanggal saat ini.
// File video di disk TIDAK ikut dihapus (bisa dipakai untuk restore).
const deleteKonten = async (req, res) => {
  try {
    // ── SOFT DELETE: cari konten yang masih aktif ──
    const konten = await Konten.findOne({
      _id: req.params.id,
      deletedAt: null,
    });
    // ───────────────────────────────────────────────

    if (!konten) {
      return errorResponse(res, "Konten tidak ditemukan", 404);
    }

    // Tandai sebagai dihapus
    konten.deletedAt = new Date();
    await konten.save();

    return successResponse(res, "Konten berhasil dihapus");
  } catch (err) {
    console.error("ERROR deleteKonten:", err);
    if (err.name === "CastError" && err.kind === "ObjectId") {
      return errorResponse(res, "Format ID konten tidak valid", 400);
    }
    return errorResponse(res, "Server error", 500);
  }
};

module.exports = {
  getAllKonten,
  getKontenById,
  createKonten,
  updateKonten,
  deleteKonten,
};
