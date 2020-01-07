'use strict';
module.exports = (sequelize, DataTypes) => {
  const currencies = sequelize.define('currencies', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  currencies.associate = function(models) {
    // associations can be defined here
  };
  return currencies;
};