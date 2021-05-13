const AuthService = require('../services/auth');
const HotelService = require('../services/hotel');

module.exports = {
  async create(req, res) {
    try {
      const { user, hotel } = req.body;
      const newUser = await AuthService.register(user);
      newUser.token = AuthService.generateToken(newUser);
      hotel.contactEmail = newUser.email;
      hotel.contactMobile = newUser.mobile;
      const newHotel = await HotelService.create(hotel);
      res.json({ newUser, newHotel });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error });
    }
  },
};
