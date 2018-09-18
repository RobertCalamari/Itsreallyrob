
var express = require('express');
var app = express();
var serv = require('http').Server(app);
 
app.get('/',function(req, res) {
    //Start this file
    res.sendFile(__dirname + '/client/index.html');
});
//This allows use of other folders
app.use('/client',express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/client/css'));
app.use(express.static(__dirname + '/client/img'));
app.use(express.static(__dirname + '/client/js'));
app.use(express.static(__dirname + '/client/fonts'));
app.use(express.static(__dirname + '/client/pages'));
app.use(express.static(__dirname + '/client'));
 
 //Port is on 2000
//serv.listen(2000);
// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 8000;
// }
serv.listen(process.env.PORT || 8000);

console.log("Server started.");

 var SOCKET_LIST = {};

var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){

    //Assign the socket a random number as id and put it in a socket list(the connections)
    socket.id = Math.random();
    SOCKET_LIST[socket.id] = socket;

    socket.on('sendtoall',function(data){
        for(let i in SOCKET_LIST){
            SOCKET_LIST[i].emit('updatepic',{drawncanvas:data.drawncanvas});
        }
    });

});
