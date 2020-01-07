const Router = require("express").Router();
const CurrencyController = require("../../Controllers/Admin/CurrencyController");

// middleware
const UserJwt = require("../../Middlewares/User/UserJwt");

Router.get("/", (...args) => CurrencyController(...args).get());
Router.get("/:currencyId", (...args) => CurrencyController(...args).getById());
Router.post("/", (...args) => CurrencyController(...args).post());
Router.delete("/:currencyId", (...args) =>
  CurrencyController(...args).delete()
);
Router.put("/:currencyId", (...args) => CurrencyController(...args).put());

module.exports = Router;
