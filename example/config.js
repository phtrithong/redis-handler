import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const isEnvFound = dotenv.config();

if(isEnvFound.error) {
  throw new Error("Couldn't found .env file");
}

export default {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  redisPass: process.env.REDIS_PASSWORD,
};