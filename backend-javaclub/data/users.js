import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'ben@gmail.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },
  {
    name: 'Jhyx',
    email: 'mundo@gmail.com',
    password: bcrypt.hashSync('123', 10),
  },
  {
    name: 'Gemuel',
    email: 'gem@gmail.com',
    password: bcrypt.hashSync('123', 10),
  },
];

export default users;
