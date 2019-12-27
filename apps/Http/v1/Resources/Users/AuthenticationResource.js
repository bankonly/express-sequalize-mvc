const Router = require("express").Router();
const AuthenticationController = require("../../Controllers/User/AuthenticationController");

Router.post("/register", (...args) =>
  AuthenticationController(...args).register()
);
Router.post("/login", (...args) => AuthenticationController(...args).login());

module.exports = Router;
