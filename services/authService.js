const { readCsv } = require('../utils/csvUtils');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const filePath = './data/coaches.csv';

const authenticate = async (email, password) => {
  const coaches = await readCsv(filePath);
  const coach = coaches.find(c => c.email === email);
  if (!coach) throw new Error('Invalid email or password.');
  
  const validPassword = await bcrypt.compare(password, coach.password);
  if (!validPassword) throw new Error('Invalid email or password.');
  
  const token = jwt.sign({ id: coach.id }, 'secretKey');
  return token;
};

const register = async (coachData) => {
  const coaches = await readCsv(filePath);
  const existingCoach = coaches.find(c => c.cpf === coachData.cpf);
  if (existingCoach) throw new Error('Coach already registered with this CPF.');

  const id = coaches.length ? Math.max(coaches.map(c => parseInt(c.id))) + 1 : 1;
  const hashedPassword = await bcrypt.hash(coachData.password, 10);
  const newCoach = { id, ...coachData, password: hashedPassword };

  coaches.push(newCoach);
  fs.writeFileSync(filePath, coaches.map(c => Object.values(c).join(',')).join('\n'));

  return newCoach;
};

module.exports = { authenticate, register };
