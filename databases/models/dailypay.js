'use strict';
module.exports = (sequelize, DataTypes) => {
  const tableName = sequelize.define('dailypays', {
    column: DataTypes.STRING
  }, {});
  tableName.associate = function(models) {
    // associations can be defined here
  };
  return tableName;
};