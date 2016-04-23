'use strict';

/**
 * Module dependencies.
 */
var config = require('../config'),
  chalk = require('chalk'),
  path = require('path'),
  pgp = require('pg-promise')();


module.exports.loadModels = function (callback) {

};

// Initialize Postgres
module.exports.connect = function (cb) {
  var _this = this,
    db = pgp(config.db);

  db.connect()
    .then(function (obj) {
      // if (cb) cb(db);
      if (cb) {
        console.log(chalk.green('HAY CALLBACK WEOOOOON'));
        cb(db);
      }
      console.log(chalk.green('Could connect to Postgres Database'));
      obj.done(); // success, release connection;
    })
    .catch(function (error) {
      // Log Error
      console.error(chalk.red("ERROR: ", error.message || error));
    });
};

module.exports.disconnect = function (cb) {
  console.info(chalk.yellow('Debug test.'));
  // pgp.end();
};
