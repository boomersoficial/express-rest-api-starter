'use strict';

require('rootpath')();

const debug = require('debug');
const configLog = debug('CONFIG');

(() => {
  const env = process.env.ENV;

  // Enable debug messaging
  configLog(`Environment variable ENV set to ${env}`);

  if (env === 'dev') {
    require('dotenv').config({ path: './src/config/.env-dev'});
    configLog('DEV configs loaded successfully');
  } else if (env === 'stage') {
    require('dotenv').config({ path: './src/config/.env-stage'});
    configLog('STAGE configs loaded successfully');
  } else {
    require('dotenv').config({ path: './src/config/.env-prod'});
    configLog('PROD configs loaded successfully');
  }

  debug.enable(process.env.DEBUG);
})();