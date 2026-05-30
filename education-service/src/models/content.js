const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    judul: {
      type: String,
      required: [true, "Judul wajib diisi"],
      trim: true,
    },
    deskripsi: {
      type: String,
      default: null,
    },
    tipe: {
      type: String,
      enum: ["artikel", "video"],
      required: [true, "Tipe wajib diisi"],
    },
    kategori: {
      type: String,
      enum: ["aktivitas", "olahraga", "nutrisi", "motivasi", null],
      default: null,
    },
    isi: {
      type: String,
      default: null,
    },
    url_video: {
      type: String,
      default: null,
    },

    // ── SOFT DELETE ──────────────────────────────────────────────
    // null  = konten masih aktif / tampil ke pengguna
    // Date  = konten sudah dihapus (tanggal penghapusan)
    deletedAt: { type: Date, default: null },
    // ─────────────────────────────────────────────────────────────
  },
  { timestamps: true },
);

module.exports = mongoose.model("Konten", contentSchema);
