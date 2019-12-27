const Sequelize = require("sequelize");

// Option 1: Passing parameters separately
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.LOCAL_HOSTNAME,
    dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  }
);


async function connectToDb() {
  try {
    await sequelize.authenticate();
    console.log("DATABASE CONNECTED TO " + process.env.DB_NAME);
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
}

connectToDb()

module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}
