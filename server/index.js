var ss = require('socket.io-stream');
var stream = ss.createStream();
var app = require('express')()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server);

server.listen(3001);
io.on('connection', function(socket) {
	console.log('Un cliente se ha conectado');
  //socket.emit('messages',"https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3", "Hola soy juan", stream);
});

app.get('/guido', function (req, res) {
  console.log('Cliente');
  io.emit('messages',"https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3", "Hola soy juan", stream);
  res.send('Trolleaste a todos papaa!!');
});
//io.of('/guido').on('connection', function sendnotification());

console.log('App running in 3001');
