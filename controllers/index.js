const router = require('express').Router();

const homeRoutes = require('./home');
const dashboard = require('./dashboard');
const apiRoutes = require('./api');

router.use('/', homeRoutes)
router.use('/dashboard', dashboard);
router.use('/api', apiRoutes);

module.exports = router;