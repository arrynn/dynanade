"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = require("http");
const server = new http_1.Server();
const app = server.listen(3939);
const io = socket_io_1.default(app);
io.on('connection', function (socket) {
    console.log("Socket connected: ", socket.handshake.time);
    socket.on('light', function (data) {
        socket.emit('dark', 10);
        console.log('light');
    });
});
