import dotenv from "dotenv";

dotenv.config();

const { PORT } = process.env;

export const GLOBAL_CONFIG = {
  PORT,
};
