'use strict';

var defaultEnvConfig = require('./default');

module.exports = {
  db: {
    host: 'aws-us-east-1-portal.8.dblayer.com', // server name or IP address;
    port: 10131,
    database: 'memory_tracker',
    user: 'candidate',
    password: 'giap-quib-fac-wav-mi'
  },
  log: {
    // logging with Morgan - https://github.com/expressjs/morgan
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    format: 'dev',
    options: {
    }
  },
  app: {
    title: defaultEnvConfig.app.title + ' - Development Environment'
  },
  mailer: {
    from: process.env.MAILER_FROM || 'MAILER_FROM',
    options: {
      service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
      auth: {
        user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
        pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
      }
    }
  },
  livereload: true
};
