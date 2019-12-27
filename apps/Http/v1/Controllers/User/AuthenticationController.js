const UserValidator = require("../../Validator/UserValidator");
const { UserModel, User } = require("../../Models/User");
const uuid4 = require("uuid4");
const bcryptHelper = require("../../Helpers/Bcrypt");
const jwtHelper = require("../../Helpers/jwt");

class AuthenticationController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.body = req.body;
    this.params = req.params;
  }

  async login() {
    // Validate
    const { error } = UserValidator.loginValidator(this.body);
    // CHeck if error is true
    if (error) {
      global.Log.error(error.message);
      return global.Res.badRequest();
    }
    // Check if value incoming is already EXist
    const isUser = await User.findByPhone(this.body.phoneNumber);
    const isUserToSave = await UserModel.findOne({
      where: { phoneNumber: this.body.phoneNumber }
    });

    if (isUser == null) return global.Res.notFound(this.body.phoneNumber);
    const isPwdMatched = await bcryptHelper.deHashPassword(
      this.body.password,
      isUserToSave.password
    );

    if (!isPwdMatched) return global.Res.badRequest([], "PASSWORD NOT MATCHED");

    isUser.isTokenChangeCount + 1;
    isUser.save()
    const token = jwtHelper.jwtMethod(isUser);
    
    return global.Res.success({ token: token });
  }

  // get auth user
  async register() {
    // Validate
    const { error } = UserValidator.registerValidator(this.body);
    // CHeck if error is true
    if (error) {
      global.Log.error(error.message);
      return global.Res.badRequest();
    }

    // Check if value incoming is already EXist
    const isFirstName = await User.findByFirstName(this.body.firstName);
    if (isFirstName != null) return global.Res.duplicated(this.body.firstName);

    // Check if value incoming is already EXist
    const isPhoneNUmber = await User.findByPhone(this.body.phoneNumber);
    if (isPhoneNUmber != null)
      return global.Res.duplicated(this.body.phoneNumber);

    // create new user
    try {
      this.body.userId = uuid4();
      this.body.password = await bcryptHelper.hashPassword(this.body.password);
      const isSave = await UserModel.create(this.body);
      if (isSave) return global.Res.success(this.body);
    } catch (error) {
      global.Log.error(error.message);
      return global.Res.error();
    }
  }
}

module.exports = (...args) => new AuthenticationController(...args);
