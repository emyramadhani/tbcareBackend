const mongoose = require('mongoose');

const screeningSchema = new mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'ID user wajib diisi'],
    },
    total_skor: {
      type: Number,
      required: [true, 'Total skor wajib diisi'],
    },
    hasil_risiko: {
      type: String,
      enum: {
        values: ['rendah', 'sedang', 'tinggi'],
        message: 'Hasil risiko harus rendah, sedang, atau tinggi',
      },
      required: [true, 'Hasil risiko wajib diisi'],
    },

    rekomendasi: {
      type: [String],
      required: [true, 'Rekomendasi wajib diisi'],
    },
    tanggal_skrining: {
      type: Date,
      default: Date.now,
    },
  },
  {

    timestamps: { createdAt: true, updatedAt: false },
  }
);

module.exports = mongoose.model('Skrining', screeningSchema, 'skrining');