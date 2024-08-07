import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

const env = process.env.NODE_ENV || "development";
dotenv.config({ path: env === "test" ? ".env.test" : ".env" });

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT as "postgres",
  models: [__dirname + "../models"],
});

export default sequelize;
