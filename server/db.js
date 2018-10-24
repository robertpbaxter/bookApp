const Sequelize = require("sequelize");

const sequelize = new Sequelize("bookapp", "postgres", process.env.PASS, {
  host: "localhost",
  dialect: "postgres"
});

sequelize
  .authenticate()
  .then(() => console.log("Connected to bookapp db"), err => console.log(err));

module.exports = sequelize;
