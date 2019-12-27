const Log = require("../apps/Http/v1/Controllers/Common/LogController");
const Res = require("../apps/Http/v1/Controllers/Common/ResponseController");
const Joi = require("joi");

global.Log = Log;
global.Joi = Joi;

module.exports = app => {
  // Set Response
  app.use((req, res, next) => {
    global.Res = Res(res);
    next();
  });
};
