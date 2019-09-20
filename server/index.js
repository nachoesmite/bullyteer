const ss = require('socket.io-stream');
const stream = ss.createStream();
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const serveStatic = require('serve-static');
const path = require('path');
const fs = require('fs');

server.listen(3001);
app.use('/sounds', serveStatic(__dirname + '/private/'));
io.on('connection', function (socket) {
  console.log('Un cliente se ha conectado');
});


const checkSoundExistence = (character, sound) => {
  return new Promise((resolve, reject) => {
    fs.access(path.join(__dirname, 'private', character, `${sound}.mp3`), fs.F_OK, (err) => {
      if (err) {
        console.error(err)
        return reject(err);
      }
      //file exists
      resolve();
    })
  });
}


const getSoundUrl = (character, sound) => {
  const soundPath = path.join('sounds', character, `${sound}.mp3`);

  return soundPath;
};


app.get('/:character/:sound', async (req, res) => {
  const character = req.params.character;
  const sound = req.params.sound;

  try {
    await checkSoundExistence(character, sound);
    const soundUrl = getSoundUrl(character, sound);

    io.emit('messages', soundUrl, `${character}: ${sound}`, stream);

    res.send('Trolleaste a todos papaa!!\n');
  } catch (err) {
    res.status(404).send('Sound does not exist\n');
  }
});

console.log('App running in 3001');
