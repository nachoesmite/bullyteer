import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

//console.log('env', process.env.SERVER_PORT);

var io = require('socket.io-client');
var socket = io.connect('/');
var bullySound = new Audio()


function notifyMe(sound, text) {
  bullySound = new Audio(sound);
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  else if (Notification.permission === "granted") {

    //new Notification(text);

    bullySound.play();
  }

  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {

        //new Notification(text);

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

ReactDOM.render(
  <BrowserRouter>
  <App serverPort={process.env.SERVER_PORT}/>
  </BrowserRouter>,
  document.getElementById('root'));
