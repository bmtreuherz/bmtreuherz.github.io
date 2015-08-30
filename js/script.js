// invoked on page load
$(function(){
  var workExperience = ["ultimateSoftware", "spinCore"];
  var currentExperience = 0;

  // Changes currentently viewed item (expereince or project)
  var changeExperience = function(increment){
    var tempItem;
    if(increment){
      tempItem = currentExperience +1;
      if(tempItem >= workExperience.length){
        tempItem = 0;
      }
    }else{
      tempItem = currentExperience -1;
      if(tempItem < 0){
        tempItem = workExperience.length - 1;
      }
    }
    $('#' + workExperience[currentExperience]).removeClass('load');
    currentExperience = tempItem;
    $('#' + workExperience[currentExperience]).addClass('load');
  }

  // Begin transitions
  $('#home').addClass("load");
  $('#footer').addClass("load");

  // Setup event listeners
  // TODO: Remove tooltip on mobile
  $('[data-toggle="tooltip"]').tooltip({container: 'body'});

  // There should be a better way to do this. But since vertical margins are based on width
  // The offset looked aweful on mobile
  window.onresize = function(){
    $('.btn-container').css("margin-top", $('#experience').height() * 2/5);
  }


  //-------------------------NAVIGATION BUTTONS---------------------------------------
  // Buttons on home
  $('#about-from-home').click(function(){
    $('#home').removeClass('load');
    $('#about-me').addClass('load');
  })

  $('#projects-from-home').click(function(){
    $('#home').removeClass('load');
    $('#projects').addClass('load');
  })

  $('#experience-from-home').click(function(){
    $('#home').removeClass('load');
    $('#experience').addClass('load');
    $('#' + workExperience[currentExperience]).addClass('load');
    $('.btn-container').css("margin-top", $('#experience').height() * 2/5);
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

  $('#experience-from-about').click(function(){
    $('#about-me').removeClass('load');
    $('#experience').addClass('load');
    $('#' + workExperience[currentExperience]).addClass('load');
    $('.btn-container').css("margin-top", $('#experience').height() * 2/5);
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

  $('#experience-from-projects').click(function(){
    $('#projects').removeClass('load');
    $('#experience').addClass('load');
    $('#' + workExperience[currentExperience]).addClass('load');
    $('.btn-container').css("margin-top", $('#experience').height() * 2/5);
  })

  // Buttons on experience
  $('#home-from-experience').click(function(){
    $('#experience').removeClass('load');
    $('#' + workExperience[currentExperience]).removeClass('load');
    $('#home').addClass('load');
  })

  $('#about-from-experience').click(function(){
    $('#experience').removeClass('load');
    $('#' + workExperience[currentExperience]).removeClass('load');
    $('#about-me').addClass('load');
  })

  $('#projects-from-experience').click(function(){
    $('#experience').removeClass('load');
    $('#' + workExperience[currentExperience]).removeClass('load');
    $('#projects').addClass('load');
  })

  //-------------------------WORK EXPERIENCE SIDE BUTTONS---------------------------------------
  $('#experience-right').click(function(){
    changeExperience(true);
  })

  $('#experience-left').click(function(){
    changeExperience(false);
  })
});
