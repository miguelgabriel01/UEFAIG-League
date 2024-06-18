const playerService = require('../services/playerService');

const createPlayer = async (req, res) => {
  try {
    const player = await playerService.createPlayer(req.body);
    res.send(player);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const listPlayers = async (req, res) => {
  try {
    const players = await playerService.listPlayers(req.params.teamId);
    res.send(players);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getPlayer = async (req, res) => {
  try {
    const player = await playerService.getPlayerById(req.params.id);
    if (!player) return res.status(404).send('Player not found.');
    res.send(player);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updatePlayer = async (req, res) => {
  try {
    const player = await playerService.updatePlayer(req.params.id, req.body);
    res.send(player);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const deletePlayer = async (req, res) => {
  try {
    await playerService.deletePlayer(req.params.id);
    res.send({ message: 'Player deleted successfully.' });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { createPlayer, listPlayers, getPlayer, updatePlayer, deletePlayer };
