const mongoose = require('mongoose');

const screeningQuestionSchema = new mongoose.Schema(
  {
    pertanyaan: {
      type: String,
      required: [true, 'Pertanyaan wajib diisi'],
      trim: true,
    },
    bobot_skor: {
      type: Number,
      required: [true, 'Bobot skor wajib diisi'],
      default: 1,
    },
    urutan: {
      type: Number,
      required: [true, 'Urutan wajib diisi'],
      unique: true,
    },
    aktif: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// screeningQuestionSchema.index({ urutan: 1 });

module.exports = mongoose.model(
  'SkriningPertanyaan',
  screeningQuestionSchema,
  'skrining_pertanyaan'
);