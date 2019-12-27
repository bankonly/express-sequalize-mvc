"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(50)
      },
      firstName: {
        type: Sequelize.STRING(50)
      },
      lastName: {
        type: Sequelize.STRING(50)
      },
      phoneNumber: {
        type: Sequelize.INTEGER(30)
      },
      reservePhoneNumber: {
        type: Sequelize.INTEGER(30),
        allowNull: true
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      password: {
        type: Sequelize.STRING(100)
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      onlineTime: {
        type: Sequelize.BIGINT(20),
        defaultValue: 0
      },
      lastLoginAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: true
      },
      totalOrder: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      isBanned: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isTokenChangeCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      village: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      district: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      province: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      address: {
        type: Sequelize.STRING(50),
        allowNull: true
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
