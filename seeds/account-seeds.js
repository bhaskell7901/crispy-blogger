const { Account } = require('../models');

const accountData = [
  {
    username: 'bhaskell',
    passwor: 'password'
  },
  {
    username: 'randy',
    passwor: 'password'
  },
  {
    username: 'shirleystumpkins',
    passwor: 'password'
  },
  {
    username: 'user23910',
    passwor: 'password'
  },
  {
    username: 'happyGmore',
    passwor: 'password'
  }
];

const seedAccounts = () => Account.bulkCreate(accountData);

module.exports = seedAccounts;