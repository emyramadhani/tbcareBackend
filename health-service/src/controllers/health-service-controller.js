const healthService = require("../models/health-service");
const { successResponse, errorResponse } = require("../utils/response");

// ── GET /api/layanan-kesehatan ───────────────────────────────────
const getAllHealthServices = async (req, res) => {
  try {
    const { search, jenis, page = 1, limit = 10 } = req.query;

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const skip = (pageNumber - 1) * limitNumber;

    // SOFT DELETE: hanya tampilkan layanan yang belum dihapus
    const filter = { deletedAt: null };

    if (search) {
      filter.nama_faskes = { $regex: search, $options: "i" };
    }

    if (jenis) {
      filter.jenis = jenis;
    }

    const [healthServices, total_items] = await Promise.all([
      healthService
        .find(filter)
        .select("-__v")
        .sort({ nama_faskes: 1 })
        .skip(skip)
        .limit(limitNumber),
      healthService.countDocuments(filter),
    ]);

    const total_pages = Math.ceil(total_items / limitNumber);

    return successResponse(res, "Berhasil mengambil daftar layanan kesehatan", {
      healthServices,
      pagination: {
        total_items,
        total_pages,
        current_page: pageNumber,
        limit: limitNumber,
      },
    });
  } catch (err) {
    console.error("ERROR getAllHealthServices:", err);
    return errorResponse(res, "Server error", 500);
  }
};

// ── GET /api/layanan-kesehatan/:id ───────────────────────────────
const getHealthServiceById = async (req, res) => {
  try {
    // SOFT DELETE: hanya tampilkan jika belum dihapus
    const healthServices = await healthService
      .findOne({ _id: req.params.id, deletedAt: null })
      .select("-__v");

    if (!healthServices) {
      return errorResponse(res, "Data layanan kesehatan tidak ditemukan", 404);
    }

    return successResponse(
      res,
      "Berhasil mengambil detail layanan kesehatan",
      healthServices,
    );
  } catch (err) {
    if (err.name === "CastError" && err.kind === "ObjectId") {
      return errorResponse(res, "Format ID tidak valid", 400);
    }
    console.error("ERROR getHealthServiceById:", err);
    return errorResponse(res, "Server error", 500);
  }
};

// ── POST /api/layanan-kesehatan ──────────────────────────────────
const createHealthService = async (req, res) => {
  try {
    const { nama_faskes, jenis, alamat, jam_buka, no_telepon, gambar_url } =
      req.body || {};

    const healthServices = await healthService.create({
      nama_faskes,
      jenis,
      alamat,
      jam_buka,
      no_telepon,
      gambar_url,
      // deletedAt otomatis null (default) → langsung aktif
    });

    return successResponse(
      res,
      "Layanan kesehatan berhasil ditambahkan",
      healthServices,
      201,
    );
  } catch (err) {
    console.error("ERROR createHealthService:", err);
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return errorResponse(res, `Validasi gagal: ${messages.join(", ")}`, 400);
    }
    return errorResponse(res, "Server error", 500);
  }
};

// ── PUT /api/layanan-kesehatan/:id ───────────────────────────────
const updateHealthService = async (req, res) => {
  try {
    // SOFT DELETE: hanya update layanan yang belum dihapus
    const healthServices = await healthService
      .findOneAndUpdate(
        { _id: req.params.id, deletedAt: null },
        { $set: req.body },
        { new: true, runValidators: true },
      )
      .select("-__v");

    if (!healthServices) {
      return errorResponse(res, "Data layanan kesehatan tidak ditemukan", 404);
    }

    return successResponse(
      res,
      "Layanan kesehatan berhasil diperbarui",
      healthServices,
    );
  } catch (err) {
    console.error("ERROR updateHealthService:", err);
    if (err.name === "CastError" && err.kind === "ObjectId") {
      return errorResponse(res, "Format ID tidak valid", 400);
    }
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return errorResponse(res, `Validasi gagal: ${messages.join(", ")}`, 400);
    }
    return errorResponse(res, "Server error", 500);
  }
};

// ── DELETE /api/layanan-kesehatan/:id ────────────────────────────
// SOFT DELETE: layanan TIDAK benar-benar dihapus dari database.
// Hanya field deletedAt diisi dengan tanggal sekarang.
// Data tetap tersimpan di MongoDB dan bisa di-restore kapan saja.
const deleteHealthService = async (req, res) => {
  try {
    // Cari layanan yang masih aktif (belum di-soft-delete)
    const healthServices = await healthService.findOne({
      _id: req.params.id,
      deletedAt: null,
    });

    if (!healthServices) {
      return errorResponse(res, "Data layanan kesehatan tidak ditemukan", 404);
    }

    // Tandai sebagai dihapus → isi deletedAt dengan waktu sekarang
    healthServices.deletedAt = new Date();
    await healthServices.save();

    return successResponse(res, "Layanan kesehatan berhasil dihapus");
  } catch (err) {
    console.error("ERROR deleteHealthService:", err);
    if (err.name === "CastError" && err.kind === "ObjectId") {
      return errorResponse(res, "Format ID tidak valid", 400);
    }
    return errorResponse(res, "Server error", 500);
  }
};

module.exports = {
  getAllHealthServices,
  getHealthServiceById,
  createHealthService,
  updateHealthService,
  deleteHealthService,
};
