const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, playerController.createPlayer);
router.get('/:teamId', authMiddleware, playerController.listPlayers);
router.get('/player/:id', authMiddleware, playerController.getPlayer);
router.put('/:id', authMiddleware, playerController.updatePlayer);
router.delete('/:id', authMiddleware, playerController.deletePlayer);

module.exports = router;
