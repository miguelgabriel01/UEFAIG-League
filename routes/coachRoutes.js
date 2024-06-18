const express = require('express');
const router = express.Router();
const coachController = require('../controllers/coachController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/:id', authMiddleware, coachController.getCoach);

module.exports = router;
