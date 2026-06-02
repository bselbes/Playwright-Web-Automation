require('dotenv').config();

const environments = {
  prod: {
    baseUrl: 'https://www.trendyol.com'
  },
  qa: {
    baseUrl: 'https://qa.trendyol.com'
  },
  stage: {
    baseUrl: 'https://stage.trendyol.com'
  }
};

const testEnv = process.env.TEST_ENV || 'prod';

module.exports = {
  testEnv,
  baseUrl: environments[testEnv].baseUrl,
  headless: process.env.HEADLESS === 'true'
};