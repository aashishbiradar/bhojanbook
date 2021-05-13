const { Router } = require('express');
// const { authenticate } = require('../controllers/user');
const ctrl = require('../controllers/hotel');

const router = Router();

router.post('/create', ctrl.create);

module.exports = router;
