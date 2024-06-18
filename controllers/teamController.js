const teamService = require('../services/teamService');

const createTeam = async (req, res) => {
  try {
    const team = await teamService.createTeam(req.body);
    res.send(team);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const listTeam = async (req, res) => {
  try {
    const teams = await teamService.listTeam(req.user.id);
    res.send(teams);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updateTeam = async (req, res) => {
  try {
    const team = await teamService.updateTeam(req.params.id, req.body);
    res.send(team);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const deleteTeam = async (req, res) => {
  try {
    await teamService.deleteTeam(req.params.id);
    res.send({ message: 'Team deleted successfully.' });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { createTeam, listTeam, updateTeam, deleteTeam };
