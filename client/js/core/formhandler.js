// Form Handler
window.fh = {
  set_success: function(element, message) {
    $(element).closest('.form-group').removeClass('has-error');
    $(element).closest('.form-group').addClass('has-success');
    $(element).closest('.form-group').find('.help-block').html(message);
  },
  set_multisuccess: function(data) {
    errors = data.messages;
    for(var key in errors) {
      this.set_success('#' + key, errors[key]);
    }
  },
  set_single_error: function(data) {
    $('#error-result').show(100);
    $('#error-result').html(data.messages);
  },
  set_error: function(element, error) {
    document.getElementById(element).closest('.input-group').classList.add('has-error');
    document.getElementById(element).closest('.input-group').querySelector('.help-block').innerHTML = error;
  },

  remove_error: function(element) {
    document.getElementById(element).closest('.input-group').classList.remove('has-error');
    document.getElementById(element).closest('.input-group').querySelector('.help-block').innerHTML = "";
  },

  remove_all_errros: function(element) {
    var elements = document.getElementById(element).querySelectorAll('.input-group');
    elements.forEach(function(el) {
      el.classList.remove('has-error');
      var helpBlock = el.querySelector('.help-block');
      if(helpBlock) helpBlock.innerHTML = "";
    });
  },

  set_multierrors: function(data) {
    errors = data.messages;
    for(var key in errors) {
      this.set_error(key, errors[key]);
    }
  },

  hide_element: function(element) {
    $(element).closest('.form-group').css("display", "none");
  },

  show_element: function(element) {
    $(element).closest('.form-group').css("display", "block");
  },

  is_success: function(data) {
    return data.success;
  },

  clear_all: function(element) {
    $(element).find("input, textarea").val("");
  },

  redirect: function(data) {
    window.location = data.redirect;
  },

  hide_button: function() {
    var btn = document.activeElement;
    btn.disabled = true;
    window.lastbutton = btn;
    window.lastbutton_text = btn.innerHTML;
    btn.innerHTML = "wait...";
  },

  show_button: function() {
    var btn = window.lastbutton;
    btn.innerHTML = window.lastbutton_text;
    btn.disabled = false;
  },

  show_errorpage: function(error) {
    console.log(error);
    alert(error.response.status);
  }
}
