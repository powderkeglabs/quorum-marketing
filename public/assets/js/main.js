(function(){
  'use strict';
  $( document ).ready(function(){
    $('.button-collapse').sideNav();
  });

  $('#home-header-cta').click(function() {
    track('Clicked CTA', { page: 'home', location: 'header' });
  });

  $('#home-demo-btn').click(function() {
    track('Clicked Demo', { page: 'home', location: 'demo' });
  });

  $('#home-bottom-cta').click(function() {
    track('Clicked CTA', { page: 'home', location: 'bottom' });
  });

  $('#demo-btn-1').click(function() {
    track('Opened Demo', { page: 'demo', location: 'demo 1' });
  });

  $('#demo-btn-2').click(function() {
    track('Opened Demo', { page: 'demo', location: 'demo 2' });
  });

  $('#send-message').click(function() {
    track('Send Message', { page: 'contact', location: 'form' });
  });

  function track(action, data) {
    analytics.track(action, data);
  }

})();
