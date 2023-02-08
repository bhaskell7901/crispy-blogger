const seedAccounts = require('./account-seeds');
const seedBlogs = require('./blog-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedAccounts();
  console.log('\n----- ACCOUNTS SEEDED -----\n');

  await seedBlogs();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedComments();
  console.log('\n----- TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
