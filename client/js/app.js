import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


window.axios.defaults.headers.common['authtoken'] = cookie.get('authtoken');
window.api = function(url) {
  let domain = window.location.protocol + "//api." + window.location.host.replace('app.', '');
  if(!url.startsWith('/')) url = "/"+url;
  return domain+url;
}

import App from './app/App';

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
