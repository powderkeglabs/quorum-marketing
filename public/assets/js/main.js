(function(){
  'use strict';
  $( document ).ready(function(){
    $('.button-collapse').sideNav();
  });

  $('#home-header-quote').click(function() {
    track('Clicked Quote', { page: 'home', location: 'header' });
  });

  $('#home-header-demo').click(function() {
    track('Clicked Demo', { page: 'home', location: 'header' });
  });

  $('#home-featured-post').click(function() {
    track('View Featured Post', { page: 'home', location: 'featured post' });
  });

  $('#home-demo-btn').click(function() {
    track('Clicked Demo', { page: 'home', location: 'demo' });
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

  $('#footer-twitter').click(function() {
    track('Go Twitter', { page :'NA', location: 'footer' });
  });

  $('#footer-linkedin').click(function() {
    track('Go LinkedIn', { page :'NA', location: 'footer' });
  });

  function track(action, data) {
    analytics.track(action, data);
  }

})();
