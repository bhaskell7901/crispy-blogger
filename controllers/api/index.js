const router = require('express').Router();
const blog = require('./blog');
const comment = require('./comment');

router.use('/blog', blog);
router.use('/comment', comment);

module.exports = router;
