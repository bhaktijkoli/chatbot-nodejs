import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';

window.axios.defaults.headers.common['authtoken'] = cookie.get('authtoken');

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));

window.api = function(url) {
  let domain = window.location.protocol + "//api." + window.location.host.replace('app.', '');
  if(!url.startsWith('/')) url = "/"+url;
  return domain+url;
}
