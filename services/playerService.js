const { readCsv, writeCsv } = require('../utils/csvUtils');
const fs = require('fs');

const playerFilePath = './data/players.csv';

const createPlayer = async (playerData) => {
  const players = await readCsv(playerFilePath);
  const existingPlayer = players.find(p => p.identificationDocument === playerData.identificationDocument);
  if (existingPlayer) throw new Error('Player with this identification document already exists.');

  const id = players.length ? Math.max(players.map(p => parseInt(p.id))) + 1 : 1;
  const newPlayer = { id, ...playerData };

  players.push(newPlayer);
  fs.writeFileSync(playerFilePath, players.map(p => Object.values(p).join(',')).join('\n'));

  return newPlayer;
};

const listPlayers = async (teamId) => {
  const players = await readCsv(playerFilePath);
  return players.filter(p => p.teamId == teamId);
};

const getPlayerById = async (id) => {
  const players = await readCsv(playerFilePath);
  return players.find(p => p.id == id);
};

const updatePlayer = async (id, updatedData) => {
  const players = await readCsv(playerFilePath);
  const index = players.findIndex(p => p.id == id);
  if (index === -1) throw new Error('Player not found.');

  players[index] = { ...players[index], ...updatedData };
  fs.writeFileSync(playerFilePath, players.map(p => Object.values(p).join(',')).join('\n'));

  return players[index];
};

const deletePlayer = async (id) => {
  const players = await readCsv(playerFilePath);
  const index = players.findIndex(p => p.id == id);
  if (index === -1) throw new Error('Player not found.');

  players.splice(index, 1);
  fs.writeFileSync(playerFilePath, players.map(p => Object.values(p).join(',')).join('\n'));

  return true;
};

module.exports = { createPlayer, listPlayers, getPlayerById, updatePlayer, deletePlayer };
