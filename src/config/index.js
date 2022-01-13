require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  DB: process.env.DB_URL_LOCAL,
  JWT_KEY: process.env.JWT_KEY,
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
};
