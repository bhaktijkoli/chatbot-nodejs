window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Swal = require('./core/sweetalert2');

window.Swal.SingleDialog = Swal.mixin({
  allowOutsideClick: false,
  allowEscapeKey: false,
  buttonsStyling: false,
  confirmButtonClass: 'btn primary',
  cancelButtonClass: 'btn primary',
});

window.Swal.YesNo = Swal.mixin({
  allowOutsideClick: false,
  allowEscapeKey: false,
  buttonsStyling: false,
  confirmButtonClass: 'btn primary swal',
  cancelButtonClass: 'btn default',
  confirmButtonText: 'Yes',
  cancelButtonText: 'Cancel',
  showCancelButton: true,
})

require('./core/formhandler');
require('./core/cookiehandler');
