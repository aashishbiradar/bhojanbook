module.exports = class UserCtrl {
  me(req,res) {
    res.send({
      name: 'aashish'
    })
  }
}