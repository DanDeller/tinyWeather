const fs = require('fs');
const winston = require('winston');

const { createLogger, format, transports } = winston;

const logger = createLogger({
  level: process.env.NODE_ENV !== 'production'
    ? 'debug'
    : 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.colorize(),
        format.simple()
      )
    }),
    new transports.Stream({
      stream: fs.createWriteStream('./api-node.log')
    })
  ],
  defaultMeta: {
    service: 'tiny-weather'
  }
});

module.exports = logger;
