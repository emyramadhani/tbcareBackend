const express = require('express');
const { getAllHealthServices, getHealthServiceById, createHealthService, updateHealthService, deleteHealthService } = require('../controllers/health-service-controller');
const authMiddleware = require('../middleware/auth-middleware');
const { isAdmin } = require('../middleware/role-middleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/', getAllHealthServices);
router.get('/:id', getHealthServiceById);

router.post('/', isAdmin, createHealthService);
router.put('/:id', isAdmin, updateHealthService);
router.delete('/:id', isAdmin, deleteHealthService);

module.exports = router;