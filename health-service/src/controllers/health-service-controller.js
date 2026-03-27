const healthService = require('../models/health-service');
const { successResponse, errorResponse } = require('../utils/response');


const getAllHealthServices = async (req, res) => {
  try {
    const { search, jenis, page = 1, limit = 10 } = req.query;

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const skip = (pageNumber - 1) * limitNumber;

    const filter = {};

    if (search) {
      filter.nama_faskes = { $regex: search, $options: 'i' };
    }

    if (jenis) {
      filter.jenis = jenis;
    }

    const [healthServices, total_items] = await Promise.all([
      healthService.find(filter)
        .select('-__v')
        .sort({ nama_faskes: 1 }) 
        .skip(skip)
        .limit(limitNumber),
      healthService.countDocuments(filter),
    ]);

    const total_pages = Math.ceil(total_items / limitNumber);

    return successResponse(res, 'Berhasil mengambil daftar layanan kesehatan', {
      healthServices,
      pagination: {
        total_items,
        total_pages,
        current_page: pageNumber,
        limit: limitNumber,
      },
    });
  } catch (err) {
    console.error('ERROR getAllHealthServices:', err);
    return errorResponse(res, 'Server error', 500);
  }
};


const getHealthServiceById = async (req, res) => {
  try {
    const healthServices = await healthService.findById(req.params.id).select('-__v');

    if (!healthServices) return errorResponse(res, 'Data layanan kesehatan tidak ditemukan', 404);

    return successResponse(res, 'Berhasil mengambil detail layanan kesehatan', healthServices);
  } catch (err) {
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      return errorResponse(res, 'Format ID tidak valid', 400);
    }
    console.error('ERROR getHealthServiceById:', err);
    return errorResponse(res, 'Server error', 500);
  }
};


const createHealthService = async (req, res) => {
  try {
    const { nama_faskes, jenis, alamat, jam_buka, no_telepon, gambar_url } = req.body || {};

    const healthServices = await healthService.create({
      nama_faskes,
      jenis,
      alamat,
      jam_buka,
      no_telepon,
      gambar_url,
    });

    return successResponse(res, 'Layanan kesehatan berhasil ditambahkan', healthServices, 201);
  } catch (err) {
    console.error('ERROR createHealthService:', err);
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);
      return errorResponse(res, `Validasi gagal: ${messages.join(', ')}`, 400);
    }
    return errorResponse(res, 'Server error', 500);
  }
};


const updateHealthService = async (req, res) => {
  try {
    const healthServices = await healthService.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    ).select('-__v');

    if (!healthServices) return errorResponse(res, 'Data layanan kesehatan tidak ditemukan', 404);

    return successResponse(res, 'Layanan kesehatan berhasil diperbarui', healthServices);
  } catch (err) {
    console.error('ERROR updateHealthService:', err);
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      return errorResponse(res, 'Format ID tidak valid', 400);
    }
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);
      return errorResponse(res, `Validasi gagal: ${messages.join(', ')}`, 400);
    }
    return errorResponse(res, 'Server error', 500);
  }
};


const deleteHealthService = async (req, res) => {
  try {
    const healthServices = await healthService.findByIdAndDelete(req.params.id);

    if (!healthServices) return errorResponse(res, 'Data layanan kesehatan tidak ditemukan', 404);

    return successResponse(res, 'Layanan kesehatan berhasil dihapus');
  } catch (err) {
    console.error('ERROR deleteHealthService:', err);
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      return errorResponse(res, 'Format ID tidak valid', 400);
    }
    return errorResponse(res, 'Server error', 500);
  }
};

module.exports = { getAllHealthServices, getHealthServiceById, createHealthService, updateHealthService, deleteHealthService };