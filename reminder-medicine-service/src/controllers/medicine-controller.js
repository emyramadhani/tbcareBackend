const { validationResult } = require('express-validator');
const Obat = require('../models/medicine');
const MedicineHistory = require('../models/medicine-history');
const { successResponse, errorResponse } = require('../utils/response');

const createObat = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, 'Validasi gagal', 400, errors.array());
  }

  try {
    const { nama_obat, dosis, waktu_minum } = req.body || {};

    if (!nama_obat || !dosis || !waktu_minum) {
        return errorResponse(res, 'Nama obat, dosis, dan waktu minum wajib diisi', 400);
    }

    const obat = await Obat.create({
      id_user: req.userId,
      nama_obat,
      dosis,
      waktu_minum,
    });

    return successResponse(res, 'Obat berhasil ditambahkan', obat, 201);
  } catch (err) {
    console.error('ERROR createObat:', err);
    
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return errorResponse(res, `Validasi gagal: ${messages.join(', ')}`, 400);
    }

    return errorResponse(res, 'Server error', 500);
  }
};

const getAllObat = async (req, res) => {
  try {
    const obatList = await Obat.find({
      id_user: req.userId,
      aktif: true,
    }).sort({ createdAt: -1 });

    return successResponse(res, 'Berhasil mengambil data obat', obatList);
  } catch (err) {
    console.error('ERROR getAllObat:', err);
    return errorResponse(res, 'Server error', 500);
  }
};

const getObatById = async (req, res) => {
  try {
    
    const obat = await Obat.findOne({
      _id: req.params.id,
      id_user: req.userId, 
      aktif: true,
    });

    if (!obat) {
      return errorResponse(res, 'Obat tidak ditemukan', 404);
    }

    return successResponse(res, 'Berhasil mengambil detail obat', obat);
  } catch (err) {
    console.error('ERROR getObatById:', err);
    
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      return errorResponse(res, 'Format ID obat tidak valid', 400);
    }

    return errorResponse(res, 'Server error', 500);
  }
};

const updateObat = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, 'Validasi gagal', 400, errors.array());
  }

  try {
    const { nama_obat, dosis, waktu_minum } = req.body || {};

    const obat = await Obat.findOneAndUpdate(
      {
        _id: req.params.id,
        id_user: req.userId, 
        aktif: true,
      },
      { nama_obat, dosis, waktu_minum },
      { returnDocument: 'after', runValidators: true }
    );

    if (!obat) {
      return errorResponse(res, 'Obat tidak ditemukan', 404);
    }

    return successResponse(res, 'Obat berhasil diperbarui', obat);
  } catch (err) {
    console.error('ERROR updateObat:', err);

    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      return errorResponse(res, 'Format ID obat tidak valid', 400);
    }
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return errorResponse(res, `Validasi gagal: ${messages.join(', ')}`, 400);
    }

    return errorResponse(res, 'Server error', 500);
  }
};

const deleteObat = async (req, res) => {
  try {

    const obat = await Obat.findOneAndDelete({
      _id: req.params.id,
      id_user: req.userId,
    });

    if (!obat) {
      return errorResponse(res, 'Obat tidak ditemukan', 404);
    }

    await MedicineHistory.deleteMany({ id_obat: req.params.id });

    return successResponse(res, 'Obat berhasil dihapus');
  } catch (err) {
    console.error('ERROR deleteObat:', err);

    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      return errorResponse(res, 'Format ID obat tidak valid', 400);
    }

    return errorResponse(res, 'Server error', 500);
  }
};

module.exports = { createObat, getAllObat, getObatById, updateObat, deleteObat };