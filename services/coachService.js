const { readCsv, writeCsv } = require('../utils/csvUtils');
const fs = require('fs');

const filePath = './data/coaches.csv';

const getCoachById = async (id) => {
  const coaches = await readCsv(filePath);
  return coaches.find(c => c.id == id);
};

const listCoaches = async () => {
  const coaches = await readCsv(filePath);
  return coaches;
};

const updateCoach = async (id, updatedData) => {
  const coaches = await readCsv(filePath);
  const index = coaches.findIndex(c => c.id == id);
  if (index === -1) throw new Error('Coach not found.');

  coaches[index] = { ...coaches[index], ...updatedData };
  await writeCsv(filePath, coaches);

  return coaches[index];
};

const deleteCoach = async (id) => {
  const coaches = await readCsv(filePath);
  const index = coaches.findIndex(c => c.id == id);
  if (index === -1) throw new Error('Coach not found.');

  coaches.splice(index, 1);
  await writeCsv(filePath, coaches);

  return true;
};

module.exports = { getCoachById, listCoaches, updateCoach, deleteCoach };
