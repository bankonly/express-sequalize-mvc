const http = require("express").Router();

// Controller Imported
const HomeController = require("../Controllers/HomeController");

http.get("/", (...args) => HomeController(...args).get());


module.exports = http