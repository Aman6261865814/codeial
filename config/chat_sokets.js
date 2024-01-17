module.exports.chatsokets = function (soketserver) {
    let io = require('socket.io')(soketserver);



    io.sockets.on('connection', function (socket) {
        console.log('new connection received', socket.id);



        socket.on('disconnect', function () {
            console.log('socket disconnected !');
        })



        socket.on('join_room', function (data) {
            console.log('joining request received', data);



            socket.join(data.chatRoom);


            io.in(data.chatRoom).emit('user_joined', data);
        })
        // CHANGE :: detect send_message and broadcast to everyone in the room
        socket.on('send_message', function (data) {
            io.in(data.chatRoom).emit('receive_message', data);
        });
    })

};
