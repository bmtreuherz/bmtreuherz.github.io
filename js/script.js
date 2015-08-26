// invoked on page load
$(function(){
  // Begin transitions
  $('#home').addClass("load");
  $('#footer').addClass("load");

  // Setup event listeners
  $('[data-toggle="tooltip"]').tooltip({container: 'body'});
});
