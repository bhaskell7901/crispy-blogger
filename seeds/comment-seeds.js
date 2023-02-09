const { Comment } = require('../models');

const commentData = [
  {
    account_id: 5,
    blog_id: 1,
    message: 'Pie is amazing!'
  },
  {
    account_id: 4,
    blog_id: 1,
    message: 'I love me some pie!'
  },
  {
    account_id: 2,
    blog_id: 2,
    message: 'I feel great things are coming!'
  },
  {
    account_id: 3,
    blog_id: 3,
    message: 'I love winning!'
  }
];

const seedComment = () => Comment.bulkCreate(commentData, {
  individualHooks: true,
  returning: true
});

module.exports = seedComment;