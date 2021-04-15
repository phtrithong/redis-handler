import RedisHandler from '../src/index.js';
import config from './config.js';

const redisHandler = new RedisHandler({
  host: config.redisHost,
  port: config.redisPort,
  password: config.redisPass
});

async function init () {
  await redisHandler.set('key', 'value');

  let cachedValue = await redisHandler.get('key');

  console.log('cachedVa :>> ', cachedValue);
}

init();
