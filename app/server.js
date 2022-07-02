const http = require('http');

const { app } = require('./integration.api');
const { Server: Websocket } = require('socket.io');

const httpServer = http.createServer(Express);
const io = new Websocket(httpServer);

module.exports = { httpServer, io };