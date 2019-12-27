const Router = require("express").Router();

Router.get("/", (req, res, next) => {
  res.send("HELLO");
});

module.exports = Router;
