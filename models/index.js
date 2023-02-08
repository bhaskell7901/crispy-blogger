const Account = require('./Account');
const Blog = require('./Blog');
const Comment = require('./Comment');


// Account <> Blog relations
Account.hasMany(Blog, {
    foreigKey: "username_id"
});

Blog.belongsTo(Account, {
    foreigKey: "username_id"
});


// Account <> Comment relations
Account.hasMany(Comment, {
    foreigKey: "username_id"
});

Comment.belongsTo(Account, {
    foreigKey: "username_id"
});


// Blog <> Comment relations
Comment.hasMany(Blog, {
    foreigKey: "blog_id"
});

Blog.hasMany(Comment, {
    foreigKey: "blog_id"
});

module.exports = {
    Account,
    Blog,
    Comment
};
