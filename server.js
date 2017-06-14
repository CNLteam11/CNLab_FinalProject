var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

// app.use('/', express.static(__dirname + '/'));

server.listen(process.env.PORT || 3000);
console.log('Server running...');

// app.get('/', function(req, res) {
// 	res.sendFile(__dirname + '/index.html');
// });

io.sockets.on('connection', function(socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    // Disconnect
    socket.on('disconnect', function(data) {
        // if (!socket.username) return;
        console.log('disconnect')
        users.splice(users.indexOf(socket.username), 1);
        updateUsernames();
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });
    socket.on('disconnecttt', function(data) {
        // if (!socket.username) return;
        // console.log('disconnecttt')
        // console.log('before:' + users)
        users.splice(users.indexOf(socket.username), 1);
        // console.log('after:' + users)
        // console.log('beforeConn:' + connections)
        connections.splice(connections.indexOf(socket), 1);
        // console.log("afterConn: " + connections)
        updateUsernames();
        console.log('Disconnected: %s sockets connected', connections.length);
    });

    // Send Message
    socket.on('send message', function(data) {
        console.log(socket.username)
        io.sockets.emit('new message', { msg: data, user: socket.username });
    });

    // New User
    socket.on('new user', function(data, callback) {
        // console.log(connections)
        callback(true);
        socket.username = data;
        if (users.indexOf(socket.username) == -1) {
            console.log('new user')
            users.push(socket.username);
            console.log(users)
        }
        updateUsernames();
    });

    function updateUsernames() {
        io.sockets.emit('get users', users);
    }

});