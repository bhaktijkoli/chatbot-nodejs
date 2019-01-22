import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Auth from './auth/Auth';


ReactDOM.render(<BrowserRouter><Auth/></BrowserRouter>, document.getElementById('root'));


window.api = function(url) {
  let domain = window.location.protocol + "//api." + window.location.host.replace("app.", "");
  if(!url.startsWith('/')) url = "/"+url;
  return domain+url;
}
