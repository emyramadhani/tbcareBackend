const mongoose = require('mongoose');

const medicineHistorySchema = new mongoose.Schema(
  {
    id_obat: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'ID obat wajib diisi'],
      ref: 'Obat',
    },
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'ID user wajib diisi'],
      ref: 'User',

    },
    tanggal: {
      type: Date,
      required: [true, 'Tanggal wajib diisi'],
    },
    status_minum: {
      type: Boolean,
      default: false,
    },
    waktu_konfirmasi: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

medicineHistorySchema.index({ id_obat: 1, tanggal: 1 }, { unique: true });

module.exports = mongoose.model('MedicineHistory', medicineHistorySchema);