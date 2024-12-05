require('dotenv').config();
const express = require("express");
const ExcelJS = require('exceljs');
const bodyParser = require("body-parser");
const app = express();
const schedule = require('node-schedule');
const userRoutes = require("./routes/userRoutes");
const { socket, socket1 } = require('./hellpers/socketio');
const callApiAt1AM = require('./hellpers/automail');
const logger = require('./hellpers/logger');

app.use(bodyParser.json());

app.use("/api", userRoutes);
schedule.scheduleJob('0 1 * * *', callApiAt1AM);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});