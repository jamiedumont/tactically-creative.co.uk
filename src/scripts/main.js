// Normal Clicks
$(function() {
  $('#topbar .hamburger').click(function() {
    $('body').toggleClass('show-nav');
    $('#topbar').addClass('solid-nav');
     return false;
  });
  
});


// Toggle with hitting of ESC
$(document).keyup(function(e) {
	if (e.keyCode == 27) {
   $('body').toggleClass('show-nav');
   $('#topbar').addClass('solid-nav');
  }
});

$(function() {
  $('#toggle-contact').click(function() {
    $('#contact-form').toggleClass('cf-displayed');
    $('#section__contact').toggleClass('blackout');
    $('#contact-form').toggleClass('cf-hidden');
    $('#toggle-contact').toggleClass('tc-hidden');
     return false;
  });
  
});


// var contactsuccess = document.getElementById('contact-success');
// var togglecontact = document.getElementById('toggle-contact'),
//     togClasses = toggle.classList;
// if contactsuccess {
//   togClasses.add('tc-hidden');
// }

if ($('#contact-success').length) {
    $('#toggle-contact').addClass('tc-hidden');
    $('#section__contact').addClass('blackout');
}

if ($('#contact-error').length) {
    $('#toggle-contact').addClass('tc-hidden');
    $('#contact-form').addClass('cf-displayed');
    $('#section__contact').addClass('blackout');

}

if ($('.missingfield').length) {
    $('#missingmessage').addClass('mm-displayed');
}




;(function (){
    var previousScroll = 0;
    var topbar = document.getElementById('topbar'),
        navClasses = topbar.classList; // classList doesn't work <IE10

    window.addEventListener('scroll', function(e){
       var currentScroll = window.scrollY;
       var isDown = currentScroll > previousScroll;

       if ( isDown && !navClasses.contains('scrolled') ){
          // scrolling down, didn't add class yet
          navClasses.add('hidden'); // we hide the navbar
          navClasses.remove('visible','solid-nav'); // and tidy up visible class
       } else if ( !isDown ){
          // scrolling up
          navClasses.remove('hidden'); // won't error if no class found
          navClasses.add('visible','solid-nav'); // add visible class back in
       }

       // always update position
       previousScroll = currentScroll;
    });
}()); //run this anonymous function immediately

$(document).ready(function() {
  var element = document.getElementById("js-fadeInElement");
  $(element).addClass('js-fade-element-hide');

  $(window).scroll(function() {
    if( $("#js-fadeInElement").length > 0 ) {
      var elementTopToPageTop = $(element).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var windowInnerHeight = window.innerHeight;
      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
      var distanceFromBottomToAppear = 300;

      if(elementTopToWindowBottom > distanceFromBottomToAppear) {
        $(element).addClass('js-fade-element-show');
      }
      else if(elementTopToWindowBottom < 0) {
        $(element).removeClass('js-fade-element-show');
        $(element).addClass('js-fade-element-hide');
      }
    }
  });
});
