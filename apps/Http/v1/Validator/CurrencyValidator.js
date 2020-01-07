class CurrencyValidator {
  saveToDb(data) {
    const schema = global.Joi.object().keys({
      currencyName: global.Joi.string().max(10),
      currencySymbol: global.Joi.string().max(3),
      currencyRate: global.Joi.string().max(8)
    });

    return global.Joi.validate(data, schema);
  }
}

module.exports = new CurrencyValidator();
