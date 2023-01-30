import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'RalphAdmin',
    email: 'rap@gmail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Jhyx',
    email: 'mundo@gmail.com',
    password: bcrypt.hashSync('pass123', 10),
  },
  {
    name: 'Gemuel',
    email: 'gem@gmail.com',
    password: bcrypt.hashSync('pass123', 10),
  },
];

export default users;
