const { Router } = require('express');
const UserCtrl = require('../controllers/user');

const router = Router();
const ctrl = new UserCtrl();

router.get('/me', ctrl.me);

module.exports = router;