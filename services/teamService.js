const { readCsv, writeCsv } = require('../utils/csvUtils');
const fs = require('fs');

const teamFilePath = './data/teams.csv';
const playerFilePath = './data/players.csv';

const createTeam = async (teamData) => {
  const teams = await readCsv(teamFilePath);
  const existingTeam = teams.find(t => t.coachId === teamData.coachId);
  if (existingTeam) throw new Error('Coach already has a registered team.');

  const id = teams.length ? Math.max(teams.map(t => parseInt(t.id))) + 1 : 1;
  const newTeam = { id, ...teamData };

  teams.push(newTeam);
  fs.writeFileSync(teamFilePath, teams.map(t => Object.values(t).join(',')).join('\n'));

  return newTeam;
};

const listTeam = async (coachId) => {
  const teams = await readCsv(teamFilePath);
  return teams.filter(t => t.coachId == coachId);
};

const updateTeam = async (id, updatedData) => {
  const teams = await readCsv(teamFilePath);
  const index = teams.findIndex(t => t.id == id);
  if (index === -1) throw new Error('Team not found.');

  teams[index] = { ...teams[index], ...updatedData };
  fs.writeFileSync(teamFilePath, teams.map(t => Object.values(t).join(',')).join('\n'));

  return teams[index];
};

const deleteTeam = async (id) => {
  const teams = await readCsv(teamFilePath);
  const index = teams.findIndex(t => t.id == id);
  if (index === -1) throw new Error('Team not found.');

  teams.splice(index, 1);
  fs.writeFileSync(teamFilePath, teams.map(t => Object.values(t).join(',')).join('\n'));

  return true;
};

module.exports = { createTeam, listTeam, updateTeam, deleteTeam };
