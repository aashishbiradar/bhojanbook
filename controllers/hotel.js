module.exports = {
  create(req, res) {
    res.send(req.user);
  },
};
