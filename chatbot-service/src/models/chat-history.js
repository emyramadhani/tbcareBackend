const mongoose = require('mongoose');

const chatHistorySchema = new mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'ID user wajib diisi'],
      ref: 'User',
    },
    session_id: {
      type: String,
      required: [true, 'Session ID wajib diisi'],
      trim: true,
    },
    pesan_user: {
      type: String,
      required: [true, 'Pesan pengguna wajib diisi'],
    },
    respon_bot: {
      type: String,
      required: [true, 'Respon bot wajib diisi'],
    },
  },
  {
    timestamps: true,
  }
);


chatHistorySchema.index({ id_user: 1, session_id: 1, createdAt: 1 });

chatHistorySchema.index({ createdAt: 1 }, { expireAfterSeconds: 7776000 });

module.exports = mongoose.model('ChatHistory', chatHistorySchema, 'riwayat_chatbot');