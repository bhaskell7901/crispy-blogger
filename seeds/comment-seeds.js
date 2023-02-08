const { Comment } = require('../models');

const commentData = [
  {
    username_id: 5,
    blog_id: 1,
    message: 'Pie is amazing!'
  },
  {
    username_id: 4,
    blog_id: 1,
    message: 'I love me some pie!'
  },
  {
    username_id: 2,
    blog_id: 2,
    message: 'I feel great things are coming!'
  },
  {
    username_id: 3,
    blog_id: 3,
    message: 'I love winning!'
  }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;