/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./chat.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chat.js":
/*!*****************!*\
  !*** ./chat.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var httpSessionUrl = 'http://api.chat.ai:3000/chat/session/get/';\nvar chatContianer = document.querySelector('#chat-container');\nvar chatWindow = document.querySelector('#chat-window');\nvar chatWindowClose = document.querySelector('#chat-window-close');\nvar chatHeader = document.querySelector('#chat-header');\nvar chatWindowHeading = document.getElementById('chat-window-heading');\nvar chatFooter = document.getElementById('chat-footer');\nvar chatWindowInput = document.getElementById('chat-window-input');\nvar chatWindowInputPlaceholder = document.querySelector('chat-window-input::placeholder');\nvar chatMessageContainer = document.getElementById('chat-message-container');\nvar chatbox = null;\nvar session = null;\nvar chat = {\n  openWindow: function openWindow() {\n    chatWindow.classList.add('active');\n    chatWindow.classList.remove('inactive');\n    chatContianer.classList.add('inactive');\n    chatContianer.classList.remove('active');\n  },\n  closeWindow: function closeWindow() {\n    chatWindow.classList.remove('active');\n    chatWindow.classList.add('inactive');\n    chatContianer.classList.add('active');\n    chatContianer.classList.remove('inactive');\n  }\n};\nwindow.chat = {\n  init: function init(key) {\n    var xhttp = new XMLHttpRequest();\n\n    xhttp.onreadystatechange = function () {\n      if (this.readyState == 4 && this.status == 200) {\n        var res = JSON.parse(this.responseText);\n        chatbox = res.chatbox;\n        session = res.session;\n        initChatbot();\n      }\n    };\n\n    xhttp.open(\"GET\", httpSessionUrl + key, true);\n    xhttp.send();\n  }\n};\n\nfunction initChatbot() {\n  chatContianer.addEventListener('click', function () {\n    chat.openWindow();\n  });\n  chatWindowClose.addEventListener('click', function () {\n    chat.closeWindow();\n  });\n  chatWindowHeading.innerText = chatbox.title;\n  chatContianer.style.backgroundColor = chatbox.color;\n  chatHeader.style.backgroundColor = chatbox.color;\n  chatFooter.style.borderTopColor = chatbox.color;\n  insertMessage(chatbox.welcome_message, 'left');\n  setTimeout(function () {\n    chatContianer.classList.add(\"active\");\n  }, 500);\n  chatWindowInput.addEventListener('keyup', function (event) {\n    event.preventDefault();\n\n    if (event.keyCode === 13) {\n      insertMessage(chatWindowInput.value, 'right');\n      chatWindowInput.value = \"\";\n    }\n  });\n}\n\nfunction insertMessage(text, pos) {\n  var messageItem = document.createElement('DIV');\n  messageItem.classList.add('message-item');\n  chatMessageContainer.appendChild(messageItem);\n  var message = document.createElement('DIV');\n  message.classList.add('message');\n  message.classList.add(pos);\n\n  if (pos == 'left') {\n    message.style.backgroundColor = chatbox.color;\n  }\n\n  message.innerText = text;\n  messageItem.appendChild(message);\n}\n\n//# sourceURL=webpack:///./chat.js?");

/***/ })

/******/ });