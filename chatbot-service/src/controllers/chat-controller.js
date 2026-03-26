const mongoose = require('mongoose');
const ChatHistory = require('../models/chat-history');
const { successResponse, errorResponse } = require('../utils/response');


const saveChat = async (req, res) => {
  try {
    const { session_id, pesan_user, respon_bot } = req.body || {};

    if (!session_id || !pesan_user || !respon_bot) {
      return errorResponse(res, 'session_id, pesan_user, dan respon_bot wajib diisi', 400);
    }

    const chat = await ChatHistory.create({
      id_user: req.userId,
      session_id,
      pesan_user,
      respon_bot,
    });

    return successResponse(res, 'Riwayat percakapan berhasil disimpan', chat, 201);
  } catch (err) {
    console.error('ERROR saveChat:', err);
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);
      return errorResponse(res, `Validasi gagal: ${messages.join(', ')}`, 400);
    }
    return errorResponse(res, 'Server error', 500);
  }
};


const getChatSessions = async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const sessions = await ChatHistory.aggregate([
      { $match: { id_user: new mongoose.Types.ObjectId(req.userId) } },
      { $sort: { createdAt: -1 } },
      {
        $group: {
          _id: '$session_id',
          session_id: { $first: '$session_id' },
          pesan_terakhir: { $first: '$pesan_user' }, 
          terakhir_update: { $first: '$createdAt' },
        },
      },
      { $sort: { terakhir_update: -1 } },
      { $skip: skip },
      { $limit: limit },
    ]);

    return successResponse(res, 'Berhasil mengambil daftar sesi obrolan', sessions);
  } catch (err) {
    console.error('ERROR getChatSessions:', err);
    return errorResponse(res, 'Server error', 500);
  }
};


const getChatDetailBySession = async (req, res) => {
  try {
    const { session_id } = req.params;

    const chats = await ChatHistory.find({
      id_user: req.userId,
      session_id: session_id,
    })
      .sort({ createdAt: 1 }) 
      .select('-__v');

    if (!chats || chats.length === 0) {
      return errorResponse(res, 'Sesi obrolan tidak ditemukan', 404);
    }

    return successResponse(res, 'Berhasil mengambil detail obrolan', chats);
  } catch (err) {
    console.error('ERROR getChatDetail:', err);
    return errorResponse(res, 'Server error', 500);
  }
};


const deleteSession = async (req, res) => {
  try {
    const { session_id } = req.params;

    const result = await ChatHistory.deleteMany({
      id_user: req.userId,
      session_id: session_id,
    });

    if (result.deletedCount === 0) {
      return errorResponse(res, 'Sesi obrolan tidak ditemukan atau sudah dihapus', 404);
    }

    return successResponse(res, 'Sesi obrolan berhasil dihapus');
  } catch (err) {
    console.error('ERROR deleteSession:', err);
    return errorResponse(res, 'Server error', 500);
  }
};

module.exports = { saveChat, getChatSessions, getChatDetailBySession, deleteSession };