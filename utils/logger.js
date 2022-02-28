/* eslint-disable no-console */
const logger = {};

logger.error = (message) => {
  console.error(message);
};

logger.log = (message) => {
  console.log(message);
};

module.exports = logger;
