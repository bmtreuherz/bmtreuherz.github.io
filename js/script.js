// invoked on page load
$(function(){
  // Begin transitions
  $('#home').addClass("load");
  $('#footer').addClass("load");

  // Setup event listeners
  // TODO: Remove tooltip on mobile
  $('[data-toggle="tooltip"]').tooltip({container: 'body'});

  // Buttons on home
  $('#about-from-home').click(function(){
    $('#home').removeClass('load');
    $('#about-me').addClass('load');
  })

  $('#projects-from-home').click(function(){
    $('#home').removeClass('load');
    $('#projects').addClass('load');
  })

  // Buttons on about
  $('#home-from-about').click(function(){
    $('#about-me').removeClass('load');
    $('#home').addClass('load');
  })

  $('#projects-from-about').click(function(){
    $('#about-me').removeClass('load');
    $('#projects').addClass('load');
  })

  // Buttons on projects
  $('#home-from-projects').click(function(){
    $('#projects').removeClass('load');
    $('#home').addClass('load');
  })

  $('#about-from-projects').click(function(){
    $('#projects').removeClass('load');
    $('#about-me').addClass('load');
  })
});
