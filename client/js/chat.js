
var chatContianer = document.querySelector('#chat-container');
var chatWindow = document.querySelector('#chat-window');
var chatWindowClose = document.querySelector('#chat-window-close');

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

(function() {
  chatContianer.addEventListener('click', function() {
    chat.openWindow();
  })
  chatWindowClose.addEventListener('click', function() {
    chat.closeWindow();
  })

  setTimeout(function () {
    chatContianer.classList.add("active");
  }, 500);
})()
