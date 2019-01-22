window.axios = require('axios');
window.Swal = require('./core/sweetalert2');
window.Swal.SingleDialog = Swal.mixin({
  allowOutsideClick: false,
  allowEscapeKey: false,
  buttonsStyling: false,
  confirmButtonClass: 'btn primary'
});
require('./core/formhandler');
