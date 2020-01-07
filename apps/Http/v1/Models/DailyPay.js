const { sequelize, Sequelize } = require("../../../../configs/db");
const Model = Sequelize.Model;

// relation ship
const { CurrencyModel } = require("./Currency");

class DailyPayModel extends Model {
  async findById(id) {
    return await DailyPayModel.findOne({ where: { id: id } });
  }
}

DailyPayModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userId: {
      allowNull: false,
      type: Sequelize.STRING(50)
    },
    currencyId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    detail: {
      type: Sequelize.STRING,
      allowNull: true
    },
    amount: {
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
    modelName: "dailypays"
  }
);
DailyPayModel.belongsTo(CurrencyModel, {
  targetKey: "currencyId",
  foreignKey: "currencyId"
});

module.exports = {
  DailyPayModel: DailyPayModel,
  DailyPayClass: new DailyPayModel()
};
