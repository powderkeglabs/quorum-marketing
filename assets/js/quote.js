(function() {

  // 'use strict';

  var quoteEmailInput = $('#quote-email');
  var quoteUnits = $('#quote-units');
  var quoteButton = $('#send-quote');
  var errors = false;

  quoteButton.click(function(e) {
    e.preventDefault();
    clearErrors();

    if (!validator.isEmail(quoteEmailInput.val())) {
      errors = true;
      $('.quote__input-field--email .error').addClass('has-error');
    }

    if (!quoteUnits.val()) {
      errors = true;
      $('.quote__input-field--units .error').addClass('has-error');
    }

    if (errors) {
      return Materialize.toast('ERROR: please check inputs', 4000);
    }

    sending();

    // Send the request
    $.post('https://quorum-api.herokuapp.com/v1/Contact/quote', {
      email: quoteEmailInput.val(),
      units: quoteUnits.val()
    }).done(function(data) {
      doneSending();
      console.log(data);
    }).fail(function(err) {
      sendError();
      console.error(err);
    });
  });

  function sending() {
    quoteButton.attr('disabled', 'disabled');
    quoteButton.addClass('disabled');
    quoteButton.html('Sending Quote Request...')
  }

  function clearErrors() {
    errors = false;
    $('.quote__input-field--email .error').removeClass('has-error');
    $('.quote__input-field--units .error').removeClass('has-error');
    $('.response-message').html('');
  }

  function doneSending() {
    clearErrors();
    clearFields();
    quoteButton.html('Quote request received')
    return Materialize.toast('SUCCESS: Quote request received.', 4000);
  }

  function sendError(err) {
    quoteButton.html('Error');
    $('.response-message').html('ERROR: Request Not Received. Please contact us instead.');
    return Materialize.toast('ERROR: Request Not Received. Please contact us instead.', 2000);
  }

  function clearFields() {
    quoteEmailInput.attr('disabled','disabled');
    quoteEmailInput.addClass('disabled');
    quoteUnits.attr('disabled','disabled');
    quoteUnits.addClass('disabled');
  }

  function resetButton() {
    quoteButton.attr('disabled', null);
    quoteButton.removeClass('disabled');
    quoteButton.html('Get a Quote Now');
  }

})();
