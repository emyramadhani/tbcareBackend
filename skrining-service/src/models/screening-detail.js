const mongoose = require('mongoose');

const screeningDetailSchema = new mongoose.Schema(
  {
    id_skrining: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Skrining',
      required: [true, 'ID skrining wajib diisi'],
    },
    id_pertanyaan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SkriningPertanyaan',
      required: [true, 'ID pertanyaan wajib diisi'],
    },
    jawaban: {
      type: String,
      enum: {
        values: ['Ya', 'Tidak'],
        message: 'Jawaban harus Ya atau Tidak',
      },
      required: [true, 'Jawaban wajib diisi'],
    },

    skor: {
      type: Number,
      required: [true, 'Skor wajib diisi'],
    },
  },
  {

    timestamps: { createdAt: true, updatedAt: false },
  }
);

module.exports = mongoose.model(
  'SkriningDetail',
  screeningDetailSchema,
  'skrining_detail'
);