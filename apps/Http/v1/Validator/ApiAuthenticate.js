class ApiAuthenticate {
  // apiValidator function
  apiKeyValidator(object, token, schema = {}, objectApiKey = {}) {
    // check if apitoken is null
    if (token == null) return true;
    // modify object to validate
    objectApiKey = { token: token };
    // validate with global.joi
    schema = global.Joi.object().keys({
      token: global.Joi.string().required()
    });
    // return validte method
    return global.Joi.validate(objectApiKey, schema);
  }
}

module.exports = new ApiAuthenticate();
