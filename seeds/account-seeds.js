const { Account } = require('../models');

const accountData = [
  {
    username: 'bhaskell',
    password: 'password'
  },
  {
    username: 'randy',
    password: 'password1'
  },
  {
    username: 'shirleystumpkins',
    password: 'password2'
  },
  {
    username: 'user23910',
    password: 'password3'
  },
  {
    username: 'happyGmore',
    password: 'password4'
  }
];

const seedAccounts = () => Account.bulkCreate(accountData);

module.exports = seedAccounts;