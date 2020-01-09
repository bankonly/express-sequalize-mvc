const { DailyPayClass, DailyPayModel } = require("../../Models/DailyPay");
const { sequelize, Sequelize } = require("../../../../../configs/db");

const { CurrencyModel, CurrencyClass } = require("../../Models/Currency");
const Validator = require("../../Validator/DailyPayValidator");

const Helper = require("../Common/HelperController");
class DailyPayController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.body = req.body;
    this.params = req.params;
  }

  async fetchByDateOnly() {
    const isData = await DailyPayModel.findAll({
      attributes: DailyPayClass.column(),
      where: { dateOnly: this.params.dateOnly, userId: this.req.user.userId },
      include: DailyPayClass.joinCurrencyCondition()
    });
    if (isData.length == 0) return global.Res.notFound(this.params.dateOnly);

    return global.Res.success(isData);
  }

  async fetchGroupByDate() {
    try {
      const isData = await DailyPayModel.findAll({
        where: { userId: this.req.user.userId, userId: this.req.user.userId },
        group: "dateOnly",
        include: DailyPayClass.joinCurrencyCondition()
      });
      global.Res.success(isData);
    } catch (error) {
      global.Log.error(error.message);
      return global.Res.somethingWrong();
    }
  }

  // get all currency
  async get() {
    try {
      const isData = await DailyPayModel.findAll({
        where: { userId: this.req.user.userId },
        include: DailyPayClass.joinCurrencyCondition()
      });
      global.Res.success(isData);
    } catch (error) {
      global.Log.error(error.message);
      return global.Res.somethingWrong();
    }
  }

  async getById(id = null) {
    id = id != null ? id : this.params.dailyPayId;
    const isData = await DailyPayClass.findById(id);
    // check if user is exist
    if (isData == null) return global.Res.notFound(id);

    // if id is not null then return on isData (no response option)
    return id != null ? isData : global.Res.success(isData);
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
      this.body.dateOnly = Helper.getOnlyDate();
      const isSave = await DailyPayModel.create(this.body);
      const responseData = await this.getById(isSave.id);

      global.socket.emit("emitJoin", responseData);
      global.socket.broadcast.emit("emitJoin", responseData);

      return global.Res.success(responseData);
    } catch (e) {
      global.Log.error(e.message);
      return global.Res.somethingWrong();
    }
  }

  // save currency
  async put() {
    try {
      const isData = await DailyPayClass.findById(this.params.dailyPayId);
      // check if user is exist
      if (isData == null) return global.Res.notFound(this.params.dailyPayId);

      const isExist = await CurrencyClass.findByCurrencyId(
        this.body.currencyId
      );

      // if currency is already exist
      if (isExist == null) return global.Res.notFound(this.body.currencyId);

      const isUpdate = await isData.update(this.body);

      global.Res.success(isUpdate);
    } catch (e) {
      global.Log.error(e.message);
      return global.Res.somethingWrong();
    }
  }

  // delete
  async delete() {
    try {
      const isData = await DailyPayClass.findById(this.params.dailyPayId);
      // check if user is exist
      if (isData == null) return global.Res.notFound(this.params.dailyPayId);
      const isDel = await isData.destroy();
      if (isDel) return global.Res.success();
    } catch (error) {
      global.Log.error(e.message);
      return global.Res.somethingWrong();
    }
  }
}

module.exports = (...args) => new DailyPayController(...args);
