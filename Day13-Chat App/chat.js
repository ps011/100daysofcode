const socket = require('socket.io');
const path = require('path');
var express = require('express');
var router = express.Router();

var io = socket();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function(socket){
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('userOneTyping', (msg) => {
        io.emit('userOneTyping', msg);
    });

    socket.on('userTwoTyping', (msg) => {
        io.emit('userTwoTyping', msg);
    });

    socket.on('userTwoMessage', (msg) => {
        io.emit('userOneMessageReceive', msg);
    });

    socket.on('userOneMessage', (msg) => {
        io.emit('userTwoMessageReceive', msg);
    });
});

module.exports = {io, router};
