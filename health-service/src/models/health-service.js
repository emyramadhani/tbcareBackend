const mongoose = require("mongoose");

const healthServiceSchema = new mongoose.Schema(
  {
    nama_faskes: {
      type: String,
      required: [true, "Nama fasilitas kesehatan wajib diisi"],
      trim: true,
    },
    jenis: {
      type: String,
      required: [true, "Jenis fasilitas kesehatan wajib diisi"],
      trim: true,
    },
    alamat: {
      type: String,
      trim: true,
      default: null,
    },
    jam_buka: {
      type: String,
      default: null,
    },
    no_telepon: {
      type: String,
      trim: true,
      default: null,
    },
    gambar_url: {
      type: String,
      default: null,
    },

    // ── SOFT DELETE ──────────────────────────────────────────────
    // null  = layanan masih aktif / tampil ke pengguna
    // Date  = layanan sudah dihapus (menyimpan tanggal penghapusan)
    deletedAt: {
      type: Date,
      default: null,
    },
    // ─────────────────────────────────────────────────────────────
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model(
  "HealthService",
  healthServiceSchema,
  "layanan_kesehatan",
);
