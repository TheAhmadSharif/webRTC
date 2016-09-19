'use strict';

var constraints ={
  audio: true,
  video: true
};

function success(data){
  var video = document.getElementById('hello');
  video.src = window.URL.createObjectURL(data);

  video.onloadedmetadata = function(e) {
           video.play();
  };
}
function error(err){
  console.log(err);
}

navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);

/*
    chrome://flags/#enable-experimental-web-platform-features
*/