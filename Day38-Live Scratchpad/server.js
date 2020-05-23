const socketConn = require('socket.io');
const io = socketConn();

io.on("connection", socket => {
    console.log('User connected');
    socket.on('draw', data => {
        socket.broadcast.emit('canvasData', data);
    })
})

module.exports = io;
