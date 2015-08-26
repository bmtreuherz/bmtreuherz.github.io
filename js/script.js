// invoked on page load
$(function(){
  // Begin transitions
  $('#home').addClass("load");
  $('#footer').addClass("load");

  // Setup event listeners
  $('[data-toggle="tooltip"]').tooltip({container: 'body'});

  $('#about-me-button').click(function(){
    $('#home').removeClass('load');
    $('#about-me').addClass('load');
  })

  $('#home-button').click(function(){
    $('#about-me').removeClass('load');
    $('#home').addClass('load');
  })
});
