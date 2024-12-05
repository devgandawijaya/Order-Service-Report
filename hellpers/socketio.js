const io = require("socket.io-client");
const axios = require('axios');
const logger = require('../hellpers/logger');


const socket = io('http://localhost:3001/'); // server tujuan account

// Fungsi untuk memanggil API
const callApi = async () => {
  try {
    const response = await axios.get('http://localhost:3002/api/ordertoserver');
    return response.data;
  } catch (error) {
    logger.error(`error call api : ${error.message}`);
    return null;
  }
};
// Mengatur event saat terhubung ke socket
socket.on("connect", () => {
  logger.info(`Connected to SOCKET_URL_1 : ${socket.id}`);
  setInterval(async () => {
    const apiData = await callApi();
    
    if (apiData) {
      socket.emit("sendData", apiData);
    } else {
      logger.error(`No API data to send`);
    }
  }, 1000000);
});

// Mendengarkan data yang diterima dari server
socket.on("receiveData", (data) => {
  logger.info(`server tujuan account: ${data}`);
});

const socket1 = io('http://localhost:3002/'); // server tujuan order

const callApi1 = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/getAvalaibleJo');
    return response.data;
  } catch (error) {
    logger.error(`Error calling API:${ error.message}`);
    return null;
  }
};

socket1.on("connect", () => {
  logger.info(`Connected to SOCKET_URL_2 : ${socket.id}`);
  setInterval(async () => {
    const apiData = await callApi1();
    if (apiData) {
      socket1.emit("sendData", apiData);
    } else {
      logger.info(`No API data to send`);
    }
  }, 5000);
});

socket1.on("receiveData", (data) => {
  logger.info(`Server Tujuan Order:  ${ data}`);
});

module.exports = { socket, socket1 }; 