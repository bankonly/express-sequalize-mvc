const { User, UserModel } = require("../../Models/User");
const apiAuthenticate = require("../../Validator/ApiAuthenticate");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.headers.token;
  try {
    const isValidate = await apiAuthenticate.apiKeyValidator(
      req.headers,
      token
    ); 
    // check if token is invalid
    if (isValidate.token == null) return global.Res.unAuthorized();

    const decodeJwt = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decodeJwt) return global.Res.unAuthorized();
    req.user = decodeJwt;
  } catch (ex) {
    global.Log.error(ex.message);
    return global.Res.unAuthorized(ex.message);
  }
  next();
};
