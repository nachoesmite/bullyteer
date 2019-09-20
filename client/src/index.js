var io = require('socket.io-client');
var ss = require('socket.io-stream');
var socket = io.connect('http://localhost:3001/');
var stream = ss.createStream();
var sound;
var text;


function notifyMe(sound, text) {
    var bullySound = new Audio(sound);
    bullySound.autoplay = true;
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    else if (Notification.permission === "granted") {
      var notification = new Notification(text);
      bullySound.play();
    }
  
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          var notification = new Notification(text);
          bullySound.play();
        }
      });
    }
  }

//createReadStream().pipe(stream);
socket.on('messages', function(sound, text) {
	notifyMe(sound,text);
});
 