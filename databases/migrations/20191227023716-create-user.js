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
        type: Sequelize.INTEGER(15)
      },
      reservePhoneNumber: {
        type: Sequelize.INTEGER(15),
        allowNull: true
      },
      email: {
        type: Sequelize.STRING(50)
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
        type: Sequelize.STRING(20),
        defaultValue: Sequelize.NOW,
        allowNull: true
      },
      totalOrder: {
        type: Sequelize.INTEGER
      },
      isBanned: {
        type: Sequelize.BOOLEAN
      },
      village: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      district: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      province: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      address: {
        type: Sequelize.STRING(50),
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};

// const userModel = {
//   userId: String, // 50 Current date + timeStamp
//   firstName: String, // 15
//   lastName: String, // 15
//   phoneNumber: Number, // 15
//   reservePhoneNumber: Number, // 15
//   email: String, // 15
//   password: String, // 50
//   isAdmin: Boolean, // Default is 0
//   onlineTime: Number, // increasing every refresh
//   lastLoginAt: Date, // current login date
//   totalOrder: Number, // count order time
//   isBanned: Boolean, // ban user if user is invalid
//   village: String, // 50,
//   district: String, // 50,
//   province: String, // 50,
//   address: String // 200
