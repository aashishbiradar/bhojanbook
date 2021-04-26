const { Router } = require('express');

const router = Router();

router.use('/user', require('./user'));
router.use('/hotel', require('./hotel'));

module.exports = router;
