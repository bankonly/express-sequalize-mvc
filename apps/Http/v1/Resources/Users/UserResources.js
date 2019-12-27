const Router = require("express").Router();
const UserController = require("../../Controllers/User/UserController");

Router.get("/", (...args) => UserController(...args).get());
Router.delete("/:userId", (...args) => UserController(...args).delete());

module.exports = Router;
