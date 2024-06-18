const coachService = require('../services/coachService');

const getCoach = async (req, res) => {
  try {
    const coach = await coachService.getCoachById(req.params.id);
    if (!coach) return res.status(404).send('Coach not found.');
    res.send(coach);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { getCoach };
