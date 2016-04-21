(function() {

  var nameInput = $('input#name');
  var emailInput = $('input#email');
  var msgInput = $('textarea#message');
  var errors = false;

  $('#send-message').click(function(e) {
    e.preventDefault();
    clearErrors();

    if (!nameInput.val()) {
      $('.name__input-field .error').addClass('has-error');
      errors = true;
    }

    if (!emailInput.val()) {
      $('.email__input-field .error').addClass('has-error');
      errors = true;
    }

    if (!validator.isEmail(emailInput.val())) {
      $('.email__input-field .error').addClass('has-error');
      errors = true;
    }

    if (!msgInput.val()) {
      $('.message__input-field .error').addClass('has-error');
      errors = true;
    }

    if (errors) {
      return Materialize.toast('Error Submitting, please check your inputs', 2000);
    }

    $('#send-message').addClass('hide');
    $('.contact__form--spinner').removeClass('hide');
    $('.contact__form--spinner-text').removeClass('hide');


    $.post('https://quorum-api.herokuapp.com/v1/Contact', {
      name: nameInput.val(),
      email: emailInput.val(),
      message: msgInput.val()
    }).done(function(data) {
      console.log(data);
      doneSending();
    }).fail(function(err) {
      console.error(err);
      sendError(err);
    });

  });

  function clearErrors() {
    errors = false;
    $('.response-message').html('');
    $('.name__input-field .error').removeClass('has-error');
    $('.email__input-field .error').removeClass('has-error');
    $('.message__input-field .error').removeClass('has-error');
  }

  function doneSending() {
    clearErrors();
    $('#send-message').removeClass('hide');
    $('.contact__form--spinner').addClass('hide');
    $('.contact__form--spinner-text').addClass('hide');
    $('.response-message').html('Message sent succesfully');
    clearFields();
    return Materialize.toast('Message sent successfully', 2000);
  }

  function sendError(err) {
    $('#send-message').removeClass('hide');
    $('.contact__form--spinner').addClass('hide');
    $('.contact__form--spinner-text').addClass('hide');
    $('.response-message').html('Error, message not sent, please email or call us instead.');
    return Materialize.toast('Error, message not sent, please email or call us instead.', 2000);
  }

  function clearFields() {
    nameInput.val('');
    emailInput.val('');
    msgInput.val('');
  }

})();
