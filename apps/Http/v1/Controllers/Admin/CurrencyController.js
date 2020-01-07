const { CurrencyClass, CurrencyModel } = require("../../Models/Currency");
const Validator = require("../../Validator/CurrencyValidator");

class CurrencyController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.body = req.body;
    this.params = req.params;
  }

  // get all currency
  async get() {
    const currencyData = await CurrencyModel.findAll();
    if (currencyData.length == 0) return global.Res.notFound();
    return global.Res.outPut(currencyData);
  }

  async getById() {
    const isData = await CurrencyClass.findByCurrencyId(this.params.currencyId);

    // if currency is already exist
    if (isData == null) return global.Res.notFound(this.params.currencyId);
    return global.Res.outPut(isData);
  }

  // save currency
  async post() {
    try {
      const { error } = Validator.saveToDb(this.body);

      // CHeck if error is true
      if (error) {
        global.Log.error(error.message);
        return global.Res.badRequest([], "Check your input");
      }

      // Check If Currency Name is not Exist
      const isExist = await CurrencyClass.findByCurrencyName(
        this.body.currencyName
      );

      // if currency is already exist
      if (isExist != null) return global.Res.duplicated(this.body.currencyName);

      const isSave = await CurrencyModel.create(this.body);
      global.Res.success(isSave);
    } catch (e) {
      global.Log.error(e.message);
      return global.Res.somethingWrong();
    }
  }

  // save currency
  async put() {
    try {
      const { error } = Validator.saveToDb(this.body);

      // CHeck if error is true
      if (error) {
        global.Log.error(error.message);
        return global.Res.badRequest([], "Check your input");
      }

      const isExist = await CurrencyClass.findByCurrencyId(
        this.params.currencyId
      );

      // if currency is already exist
      if (isExist == null) return global.Res.notFound(this.params.currencyId);

      const isNameExist = await CurrencyClass.findByCurrencyName(
        this.body.currencyName
      );

      // if currency is already exist
      if (isNameExist != null)
        return global.Res.duplicated(this.body.currencyName);

      const isUpdate = await isExist.update(this.body);
      global.Res.success(isUpdate);
    } catch (e) {
      global.Log.error(e.message);
      return global.Res.somethingWrong();
    }
  }

  // delete
  async delete() {
    const isCurrency = await CurrencyModel.findByPk(this.params.currencyId);
    if (isCurrency == null) return global.Res.notFound(this.params.currencyId);

    const isDel = await isCurrency.destroy();
    if (isDel) return global.Res.success(this.params.currencyId);
    return global.Res.notFound();
  }
}

module.exports = (...args) => new CurrencyController(...args);
