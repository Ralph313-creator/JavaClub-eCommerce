import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'RalphAdmin',
    email: 'rap@gmail.com',
    pasword: bcrypt.hashSync('orange123', 10),
    isAdmin: true,
  },
  {
    name: 'Jhyx',
    email: 'mundo@gmail.com',
    pasword: bcrypt.hashSync('pass123', 10),
  },
  {
    name: 'Gemuel',
    email: 'gem@gmail.com',
    pasword: bcrypt.hashSync('pass123', 10),
  },
];

export default users;
