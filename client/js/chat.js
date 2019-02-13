var io = require('./chat/socket.io')
var httpSessionUrl = 'http://api.chat.ai:3000/chat/session/get/';
var httpSocketUrl = 'http://localhost:3020';
var chatContianer = document.querySelector('#chat-container');
var chatWindow = document.querySelector('#chat-window');
var chatWindowClose = document.querySelector('#chat-window-close');
var chatHeader = document.querySelector('#chat-header');
var chatWindowHeading = document.getElementById('chat-window-heading')
var chatFooter = document.getElementById('chat-footer')
var chatWindowInput = document.getElementById('chat-window-input')
var chatWindowInputPlaceholder = document.querySelector('chat-window-input::placeholder')
var chatMessageContainer = document.getElementById('chat-message-container');
var chatbox = null;
var session = null;
var chat = {
  openWindow: function() {
    chatWindow.classList.add('active');
    chatWindow.classList.remove('inactive');
    chatContianer.classList.add('inactive');
    chatContianer.classList.remove('active');
  },
  closeWindow: function() {
    chatWindow.classList.remove('active');
    chatWindow.classList.add('inactive');
    chatContianer.classList.add('active');
    chatContianer.classList.remove('inactive');
  }
};

window.chat = {
  init: function(key) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var res = JSON.parse(this.responseText);
        chatbox = res.chatbox;
        session = res.session;
        window.chat.socket = io(httpSocketUrl);
        initChatbot();
      }
    };
    xhttp.open("GET", httpSessionUrl+key, true);
    xhttp.send();
  }
}

function initChatbot() {
  chatContianer.addEventListener('click', function() {
    chat.openWindow();
  })
  chatWindowClose.addEventListener('click', function() {
    chat.closeWindow();
  })
  chatWindowHeading.innerText = chatbox.title;
  chatContianer.style.backgroundColor = chatbox.color;
  chatHeader.style.backgroundColor = chatbox.color;
  chatFooter.style.borderTopColor = chatbox.color;
  insertMessage(chatbox.welcome_message, 'left');
  setTimeout(function () {
    chatContianer.classList.add("active");
  }, 500);
  chatWindowInput.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      insertMessage(chatWindowInput.value, 'right');
      chatWindowInput.value = "";
     }
  })
}

function insertMessage(text, pos) {
  var messageItem = document.createElement('DIV');
  messageItem.classList.add('message-item');
  chatMessageContainer.appendChild(messageItem)
  var message = document.createElement('DIV');
  message.classList.add('message')
  message.classList.add(pos)
  if(pos=='left') {
    message.style.backgroundColor = chatbox.color;
  }
  message.innerText = text;
  messageItem.appendChild(message)
}
