import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./app/store";


window.axios.defaults.headers.common['authtoken'] = cookie.get('authtoken');
window.api = function(url) {
  let domain = window.location.protocol + "//api." + window.location.host.replace('app.', '');
  if(!url.startsWith('/')) url = "/"+url;
  return domain+url;
}

import App from './app/App';

ReactDOM.render(<BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>, document.getElementById('root'));

window.Swal.Toast = Swal.mixin({
  toast: false,
  showConfirmButton: false,
});

window.Avatar = (filename) => {
  if(filename.length > 2) {
    return '/public/avatars/'+filename
  } else {
    return '/img/avatar.png';
  }
}
