const router = require('express').Router();

const blog = require('./blog');
const dashboard = require('./dashboard');
const comment = require('./comment');

// router.use('/blog', blog);
router.use('/dashboard', dashboard);
router.use('/comment', comment);

module.exports = router;
