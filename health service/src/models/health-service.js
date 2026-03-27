const mongoose = require('mongoose');

const layananKesehatanSchema = new mongoose.Schema(
  {
    nama_faskes: {
      type: String,
      required: [true, 'Nama fasilitas kesehatan wajib diisi'],
      trim: true,
    },
    jenis: {
      type: String,
      enum: {
        values: ['Puskesmas', 'Rumah Sakit', 'Klinik'],
        message: 'Jenis layanan harus Puskesmas, Rumah Sakit, atau Klinik',
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
      required: [true, 'Jam buka wajib diisi'],
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


layananKesehatanSchema.index({ nama_faskes: 1 });

module.exports = mongoose.model('LayananKesehatan', layananKesehatanSchema, 'layanan_kesehatan');