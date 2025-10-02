require('dotenv').config();
const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { id: 'usuario1', nombre: 'Cristian' },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);

console.log(token);