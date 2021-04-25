const AuthService = require('../services/auth');

const auth = new AuthService();
module.exports = class UserCtrl {
  me(req,res) {
    res.send({
      name: 'aashish'
    })
  }

  async register (req, res) {
    try {
      const newUser = await auth.register(req.body);
      newUser.token = auth.generateToken(newUser);
      res.send(newUser);
    } catch (error) {
      console.error(error)
    }
  }

  async login (req, res) {
    try {
      const user = await auth.login(req.body);
      user.token = auth.generateToken(user);
      res.send(user);
    } catch (error) {
      console.error(error)
    }
  }
}