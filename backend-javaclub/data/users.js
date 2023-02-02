import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'ben@gmail.com',
    password: bcrypt.hashSync('zxc', 10),
    isAdmin: false,
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
