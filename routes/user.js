const { Router } = require('express');
const UserCtrl = require('../controllers/user');

const router = Router();
const ctrl = new UserCtrl();
const { authenticate } = ctrl;

router.get('/me', authenticate, ctrl.me);
router.post('/register', ctrl.register);

module.exports = router;