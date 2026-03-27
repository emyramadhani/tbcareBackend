const express = require('express');
const { getAllHealthServices, getHealthServicesById, createHealthServices, updateHealthServices, deleteHealthServices } = require('../controllers/health-service-controller');
const authMiddleware = require('../middleware/auth-middleware');
const { isAdmin } = require('../middleware/role-middleware');

const router = express.Router();


router.use(authMiddleware);

router.get('/', getAllHealthServices);
router.get('/:id', getHealthServicesById);

router.post('/', isAdmin, createHealthServices);
router.put('/:id', isAdmin, updateHealthServices);
router.delete('/:id', isAdmin, deleteHealthServices);

module.exports = router;