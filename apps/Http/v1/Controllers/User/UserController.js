const { UserModel, User } = require("../../Models/User");

class UserController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.body = req.body;
    this.params = req.params;
  }

  // get auth user
  async get() {
    global.Res.success(this.req.user);
  }

  // delete by userId
  async delete() {
    // For Admin And Also User
    const isUser = await UserModel.findByPk(this.params.userId);
    if (isUser == null) return global.Res.notFound(this.params.userId);
    try {
      const isDel = await isUser.destroy(); // Delete user
      if (isDel) global.Res.success();
    } catch (error) {
      global.Log.error(error.message);
      return global.Res.error();
    }
  }
}

module.exports = (...args) => new UserController(...args);