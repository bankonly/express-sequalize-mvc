const { sequelize, Sequelize } = require("../../../../configs/db");
const Model = Sequelize.Model;

// relation ship Model
const { DailyPayModel } = require("./DailyPay");

class CurrencyModel extends Model {
  async findByCurrencyId(currencyId) {
    return await CurrencyModel.findOne({ where: { currencyId: currencyId } });
  }

  async findByCurrencyName(currencyName) {
    return await CurrencyModel.findOne({
      where: { currencyName: currencyName }
    });
  }
  async findByCurrencySymbol(currencySymbol) {
    return await CurrencyModel.findOne({
      where: { currencySymbol: currencySymbol }
    });
  }
}

CurrencyModel.init(
  {
    currencyId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    currencyName: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    currencySymbol: {
      type: Sequelize.STRING(3),
      allowNull: false
    },
    currencyRate: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    createdAt: {
      defaultValue: Sequelize.NOW,
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      defaultValue: Sequelize.NOW,
      allowNull: false,
      type: Sequelize.DATE
    },
    deletedAt: {
      defaultValue: Sequelize.NOW,
      allowNull: false,
      type: Sequelize.DATE
    }
  },
  {
    sequelize,
    modelName: "currencies"
  }
);

// CurrencyModel.hasMany(DailyPayModel);

module.exports = {
  CurrencyModel: CurrencyModel,
  CurrencyClass: new CurrencyModel()
};
