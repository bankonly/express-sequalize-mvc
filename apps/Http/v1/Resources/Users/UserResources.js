const Router = require("express").Router();
const UserController = require("../../Controllers/User/UserController");

// middleware
const UserJwt = require('../../Middlewares/User/UserJwt')

Router.get("/",UserJwt ,(...args) => UserController(...args).get());
Router.delete("/:userId", (...args) => UserController(...args).delete());

module.exports = Router;
