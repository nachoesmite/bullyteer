import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var io = require('socket.io-client');
var socket = io.connect('/');
var bullySound = new Audio()

function notifyMe(sound, text) {
  bullySound = new Audio(sound);
  var image = text.split(":")[0];
  var iconUrl = `/images/${image}.jpg`;
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  else if (Notification.permission === "granted") {
    new Notification(text, {badge: iconUrl});
    bullySound.play();
  }

  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {

        new Notification(text,{badge: iconUrl });

        bullySound.play();
      }
    });
  }
}

socket.on('messages', function (sound, text) {
  bullySound.pause();
  bullySound.currentTime = 0;

  notifyMe(sound, text);
});

ReactDOM.render(<App serverPort={process.env.SERVER_PORT} />, document.getElementById('root'));
