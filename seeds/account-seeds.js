const { Account } = require('../models');

const accountData = [
  {
    id: 1,
    username: 'bhaskell',
    password: 'password'
  },
  {
    id: 2,
    username: 'randy',
    password: 'password1'
  },
  {
    id: 3,
    username: 'shirleystumpkins',
    password: 'password2'
  },
  {
    id: 4,
    username: 'user23910',
    password: 'password3'
  },
  {
    id: 5,
    username: 'happyGmore',
    password: 'password4'
  }
];

const seedAccounts = () => Account.bulkCreate(accountData, {
  individualHooks: true,
  returning: true
});

module.exports = seedAccounts;