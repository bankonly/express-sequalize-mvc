const { DailyPayClass, DailyPayModel } = require("../../Models/DailyPay");
const { sequelize, Sequelize } = require("../../../../../configs/db");

const { CurrencyModel, CurrencyClass } = require("../../Models/Currency");
const Validator = require("../../Validator/DailyPayValidator");

class DailyPayController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.body = req.body;
    this.params = req.params;
  }

  // get all currency
  async get() {
    try {
      const isData = await DailyPayModel.findAll({
        where: { userId: this.req.user.userId },
        include: [
          {
            model: CurrencyModel,
            where: { currencyId: Sequelize.col("dailypays.currencyId") }
          }
        ]
      });
      global.Res.success(isData);
    } catch (error) {
      global.Log.error(error.message);
      return global.Res.somethingWrong();
    }
  }

  async getById() {
    global.Res.outPut("GET ID REQUEST");
  }

  // save currency
  async post() {
    //   if(this.body.detail == null || this.body.detail)
    try {
      const isExist = await CurrencyClass.findByCurrencyId(
        this.body.currencyId
      );

      // if currency is already exist
      if (isExist == null) return global.Res.notFound(this.body.currencyId);

      this.body.userId = this.req.user.userId;
      const isSave = await DailyPayModel.create(this.body);

      global.Res.success(isSave);
    } catch (e) {
      global.Log.error(e.message);
      return global.Res.somethingWrong();
    }
  }

  // save currency
  async put() {
    try {
      global.Res.outPut("PUT REQUEST");
    } catch (e) {
      global.Log.error(e.message);
      return global.Res.somethingWrong();
    }
  }

  // delete
  async delete() {
    global.Res.outPut("DELETE REQUEST");
  }
}

module.exports = (...args) => new DailyPayController(...args);
