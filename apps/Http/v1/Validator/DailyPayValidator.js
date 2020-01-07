const Joi = require("joi");

class DailyPayValidator {
  validate(data) {
    const schema = Joi.object().keys({
      currencyId: Joi.number().max(3),
      title: Joi.string().max(30),
      detail: Joi.string()
        .required()
        .default("..."),
      amount: Joi.string().max(10)
    });
    return Joi.validate(data, schema);
  }
}

module.exports = new DailyPayValidator();
