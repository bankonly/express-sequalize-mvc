const Router = require("express").Router();
const DailyPayController = require("../../Controllers/User/DailyPayController");

// middleware
const UserJwt = require("../../Middlewares/User/UserJwt");

Router.get("/", UserJwt, (...args) => DailyPayController(...args).get());
Router.get("/:dailyPayId", (...args) => DailyPayController(...args).getById());

Router.post("/", UserJwt, (...args) => DailyPayController(...args).post());
Router.delete("/:dailyPayId", UserJwt, (...args) =>
  DailyPayController(...args).delete()
);
Router.put("/:dailyPayId", UserJwt, (...args) =>
  DailyPayController(...args).put()
);

module.exports = Router;
