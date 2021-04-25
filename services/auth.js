const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const UserModel = require('../models/user');
const config = require('../config');

module.exports = class AuthService {
  async register(userDetails) {
    userDetails = _.pick(userDetails, ['name', 'email', 'password', 'mobile']);
    userDetails.password = await argon2.hash(userDetails.password);
    const user = new UserModel(userDetails);
    await user.save();
    let userObj = user.toObject();
    userObj = _.omit(userObj, ['password']);
    return userObj;
  }

  generateToken(user) {
    const data = {
      _id: user._id.toString(),
      email: user.email
    };
    return jwt.sign({ data }, config.secretKey, { expiresIn: config.jwtExpiry }).toString();
  }

  async authenticate(token) {
    const { data } = jwt.verify(token, config.secretKey);
    const user = await UserModel.findById(data._id);
    if (!user) {
      throw new Error('invalid user');
    }
    return user;
  }
}
