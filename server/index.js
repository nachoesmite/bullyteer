var ss = require('socket.io-stream');
var stream = ss.createStream();
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var serveStatic = require('serve-static');

server.listen(3001);
app.use('/sounds', serveStatic(__dirname + '/private/'));
io.on('connection', function(socket) {
	console.log('Un cliente se ha conectado');
});

//GUIDO
app.get('/guido/estamal', function (req, res) {
  console.log('GuidoEstamal');
  io.emit('messages',"http://localhost:3001/sounds/guido/estamal.mp3", "Esta mal", stream);
  res.send('Trolleaste a todos papaa!!');
});
app.get('/guido/peronotanmal', function (req, res) {
  console.log('GuidoNotanmal');
  io.emit('messages',"http://localhost:3001/sounds/guido/peronotanmal.mp3", "PERO NO TAAAAAN MAL!", stream);
  res.send('Trolleaste a todos papaa!!');
});
// RANDOM
app.get('/random/encaravanao', function (req, res) {
  console.log('RandomEncaravanao');
  io.emit('messages',"http://localhost:3001/sounds/random/encaravano.mp3", "TOY ENCARAVAAAANAO", stream);
  res.send('Trolleaste a todos papaa!!');
});
app.get('/random/keno', function (req, res) {
  console.log('RandomKeno');
  io.emit('messages',"http://localhost:3001/sounds/random/keno.mp3", "KEEEENO!!!!???", stream);
  res.send('Trolleaste a todos papaa!!');
});
app.get('/random/kepregunta', function (req, res) {
  console.log('RandomKepregunta');
  io.emit('messages',"http://localhost:3001/sounds/random/kepregunta.mp3", "KE PREEEEEEGUUUUUUNTAAAAA", stream);
  res.send('Trolleaste a todos papaa!!');
});
app.get('/random/toyechao', function (req, res) {
  console.log('RandomToyechao');
  io.emit('messages',"http://localhost:3001/sounds/random/toyechao.mp3", "TOY EEEEECHAAAOOO!", stream);
  res.send('Trolleaste a todos papaa!!');
});
// SAMID
app.get('/samid/barbaridad', function (req, res) {
  console.log('SamidBarbaridad');
  io.emit('messages',"http://localhost:3001/sounds/samid/barbaridad.mp3", "USTED NO PUEDE DECIR SEMEJANTE BARBARIDAD", stream);
  res.send('Trolleaste a todos papaa!!');
});
app.get('/samid/barbaridad2', function (req, res) {
  console.log('SamidBarbaridad2');
  io.emit('messages',"http://localhost:3001/sounds/samid/barbaridad2.mp3", "BARBARIDAD", stream);
  res.send('Trolleaste a todos papaa!!');
});
app.get('/samid/nopuede', function (req, res) {
  console.log('SamidNopuede');
  io.emit('messages',"http://localhost:3001/sounds/samid/nopuede.mp3", "USTED NO PUEDE DECIR", stream);
  res.send('Trolleaste a todos papaa!!');
});
app.get('/samid/tieneque', function (req, res) {
  console.log('SamidTieneque');
  io.emit('messages',"http://localhost:3001/sounds/samid/tieneque.mp3", "USTED TIENE QUE ARREPENTIRSE", stream);
  res.send('Trolleaste a todos papaa!!');
});


//io.of('/guido').on('connection', function sendnotification());

console.log('App running in 3001');
