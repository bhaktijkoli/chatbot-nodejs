import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';


ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));


window.api = function(url) {
  let domain = window.location.protocol + "//api." + window.location.host;
  if(!url.startsWith('/')) url = "/"+url;
  return domain+url;
}

window.app = function(url) {
  let domain = window.location.protocol + "//app." + window.location.host;
  if(!url.startsWith('/')) url = "/"+url;
  return domain+url;
}
