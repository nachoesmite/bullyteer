const ss = require('socket.io-stream');
const stream = ss.createStream();
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const serveStatic = require('serve-static');
const path = require('path');
const fs = require('fs');
const express = require('express');

const PORT = process.env.PORT || 80;
const PRIVATE_FOLDER = 'private';
const VALID_EXTENSIONS = ['.mp3'];

server.listen(PORT);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  next();
});
app.use('/sounds', serveStatic(path.join(__dirname, PRIVATE_FOLDER)));
io.on('connection', function (socket) {
  console.log('Un cliente se ha conectado');
});

app.use(express.static(path.resolve(__dirname, './public/')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/', './index.html'));
});

const checkSoundExistence = (character, sound) => {
  return new Promise((resolve, reject) => {
    fs.access(path.join(__dirname, PRIVATE_FOLDER, character, `${sound}.mp3`), fs.F_OK, (err) => {
      if (err) {
        console.error(err)
        return reject(err);
      }
      resolve();
    })
  });
}


const getSoundUrl = (character, sound) => {
  const soundPath = path.join('sounds', character, `${sound}.mp3`);

  return soundPath;
};

app.get('/list', async (req, res) => {
  const results = {};

  const dirs = fs.readdirSync(path.resolve(__dirname, PRIVATE_FOLDER));
  dirs.forEach((dir) => {
    const files = fs.readdirSync(path.join(__dirname, PRIVATE_FOLDER, dir));

    results[dir] = files
      .filter((file) => VALID_EXTENSIONS.find((extension) => file.endsWith(extension)) !== undefined)
      .map((file) => {
        const fileArray = file.split('.');

        fileArray.pop();

        return fileArray.join('.');
      });
  });

  res.json(results);
});

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

console.log(`App running in port ${PORT}`);
