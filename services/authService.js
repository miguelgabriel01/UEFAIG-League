const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { readCsv, writeCsv } = require('../utils/csvUtils');
const filePath = './data/coaches.csv';
const secretKey = 'secretKey';  // Chave secreta consistente

const login = async ({ email, password }) => {
  const coaches = await readCsv(filePath);
  const coach = coaches.find(c => c.email === email);

  if (!coach) {
    throw new Error('Invalid email or password.');
  }

  const isMatch = await bcrypt.compare(password, coach.password);

  if (!isMatch) {
    throw new Error('Invalid email or password.');
  }

  const token = jwt.sign({ id: coach.id }, secretKey, { expiresIn: '1h' });
  return { token };
};

const register = async (data) => {
  const coaches = await readCsv(filePath);

  const existingCoach = coaches.find(c => c.email === data.email || c.cpf === data.cpf);

  if (existingCoach) {
    throw new Error('Coach already registered.');
  }

  const newCoach = {
    id: coaches.length + 1,
    ...data,
    password: await bcrypt.hash(data.password, 10),
  };

  coaches.push(newCoach);
  await writeCsv(filePath, coaches);

  return newCoach;
};

module.exports = { login, register };
