class UserValidator {
  registerValidator(data) {
    const schema = global.Joi.object().keys({
      firstName: global.Joi.string()
        .max(50)
        .min(5),
      lastName: global.Joi.string()
        .max(50)
        .min(5),
      phoneNumber: global.Joi.number(),
      password: global.Joi.string().min(8)
    });

    return global.Joi.validate(data, schema);
  }

  loginValidator(data) {
    const schema = global.Joi.object().keys({
      phoneNumber: global.Joi.number(),
      password: global.Joi.string().min(8)
    });

    return global.Joi.validate(data, schema);
  }
}

module.exports = new UserValidator();
