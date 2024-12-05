const { createLogger, format, transports } = require('winston');
const path = require('path');

const logPath = path.join(__dirname, 'logs', 'app.log');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.File({ filename: logPath }),
        new transports.Console() 
    ]
});

module.exports = logger;
