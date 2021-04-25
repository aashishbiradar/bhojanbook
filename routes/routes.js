const { Router } = require('express');
const router = Router();

router.get('/ping', (req, res) => {
  res.send('pong');
});

router.use('/user', require('./user'));

module.exports = router;
