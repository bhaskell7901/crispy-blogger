const { Blog } = require('../models');

const blogData = [
  {
    account_id: 1,
    title: 'Amazing Things About Pie',
    message: 'Pie is an amazing number that goes on and on, and on and on...'
  },
  {
    account_id: 1,
    title: 'Great Things on the Rise',
    message: 'There are many great things on the rise in computer programming.'
  },
  {
    account_id: 2,
    title: 'Small Wins',
    message: 'Wins of any sort are a good thing, even if they are small wins.'
  },
  {
    account_id: 3,
    title: 'Wondering the Code-verse',
    message: 'How to stay on track when there are so many distractions on the web.'
  },
  {
    account_id: 4,
    title: 'Celebrate! You Are Coding',
    message: 'It is now time to celebrate! You are actually coding!'
  }
];

const seedBlog = () => Blog.bulkCreate(blogData, {
  individualHooks: true,
  returning: true
});

module.exports = seedBlog;