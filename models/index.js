const Account = require('./Account');
const Blog = require('./Blog');
const Comment = require('./Comment');


// Account <> Blog relations
Account.hasMany(Blog, {
    foreigKey: "account_id"
});

Blog.belongsTo(Account, {
    foreigKey: "account_id"
});


// Account <> Comment relations
Account.hasMany(Comment, {
    foreigKey: "account_id"
});

Comment.belongsTo(Account, {
    foreigKey: "account_id"
});


// Blog <> Comment relations
Comment.belongsTo(Blog, {
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
