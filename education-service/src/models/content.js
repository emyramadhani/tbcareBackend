const mongoose = require('mongoose');

const kontenSchema = new mongoose.Schema(
  {
    judul: {
      type: String,
      required: [true, 'Judul konten wajib diisi'],
      trim: true,
      maxlength: [150, 'Judul maksimal 150 karakter'],
    },
    deskripsi: {
      type: String,
      trim: true,
      default: null,
    },
    tipe: {
      type: String,
      enum: {
        values: ['artikel', 'video'],
        message: 'Tipe harus artikel atau video',
      },
      required: [true, 'Tipe konten wajib diisi'],
    },
    kategori: {
      type: String,
      enum: {
        values: ['aktivitas', 'olahraga', 'nutrisi', 'motivasi'],
        message: 'Kategori tidak valid',
      },
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
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model('Konten', kontenSchema, 'konten_edukasi');