const mongoose = require('mongoose');

const healthServiceSchema = new mongoose.Schema(
  {
    nama_faskes: {
      type: String,
      required: [true, 'Nama fasilitas kesehatan wajib diisi'],
      trim: true,
    },
    jenis: {
      type: String,
      enum: {
        values: ['UPTPAS', 'PMD', 'Klinik', 'BBKPM-BPKMB-P4'],
        message: 'Jenis layanan harus salah satu dari: UPTPAS, PMD, Klinik, BBKPM-BPKMB-P4',
      },
      required: [true, 'Jenis layanan wajib diisi'],
    },
    alamat: {
      type: String,
      required: [true, 'Alamat wajib diisi'],
      trim: true,
    },

    jam_buka: {
      type: String,
      default: '-', 
      trim: true,
    },
    no_telepon: {
      type: String,
      default: '-', 
      trim: true,
    },
    gambar_url: {
      type: String,
      default: null, 
    },
  },
  {
    timestamps: true,
  }
);

healthServiceSchema.index({ nama_faskes: 1 });

module.exports = mongoose.model('HealthService', healthServiceSchema, 'layanan_kesehatan');