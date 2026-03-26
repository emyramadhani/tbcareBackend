const SkriningPertanyaan = require('../models/screening-question');
const { successResponse, errorResponse } = require('../utils/response');

const getAllQuestions = async (req, res) => {
  try {
    const pertanyaan = await SkriningPertanyaan.find({ aktif: true })
      .select('-__v')
      .sort({ urutan: 1 });

    return successResponse(
      res,
      'Berhasil mengambil pertanyaan skrining',
      pertanyaan
    );
  } catch (err) {
    console.error('ERROR getAllQuestions:', err);
    return errorResponse(res, 'Server error', 500);
  }
};

module.exports = { getAllQuestions };