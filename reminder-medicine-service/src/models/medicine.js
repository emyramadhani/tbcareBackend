const mongoose = require('mongoose');

const obatSchema = new mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'ID user wajib diisi'],
      ref: 'User',
    },
    nama_obat: {
      type: String,
      required: [true, 'Nama obat wajib diisi'],
      trim: true,
    },
    dosis: {
      type: String,
      required: [true, 'Dosis wajib diisi'],
      trim: true,

    },
    waktu_minum: {
      type: [String],
      required: [true, 'Waktu minum wajib diisi'],
      validate: {
        validator: function (arr) {
          if (arr.length === 0) return false;
          return arr.every((time) => /^([0-1]\d|2[0-3]):[0-5]\d$/.test(time));
        },
        message: 'Format waktu minum harus HH:MM, contoh: 07:00',
      },
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

module.exports = mongoose.model('Obat', obatSchema, 'obat');