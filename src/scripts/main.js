jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 768;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.topbar').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.topbar').hasClass('is-fixed')) {
		    		$('.topbar').addClass('is-visible');
		    	} else {
		    		$('.topbar').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.topbar').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.topbar').hasClass('is-fixed')) $('.topbar').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	$('.topbar__alpha-nav-trigger').on('click', function(){
		$('.trigger__icon').toggleClass('is-clicked'); 
		$('.topbar').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.alpha-nav').hasClass('is-visible') ) {
			$('.alpha-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.alpha-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});
});

// EXPANDABLE SECTION

$(document).ready(function() {
  var expanderTrigger = document.getElementById("js-expander-trigger");
  var expanderContent = document.getElementById("js-expander-content");

  $('#js-expander-trigger-1').click(function(){
    $(this).toggleClass("expander-hidden expander-line");
  });

  $('#js-expander-trigger-2').click(function(){
    $(this).toggleClass("expander-hidden expander-line");
  });

  $('#js-expander-trigger-3').click(function(){
    $(this).toggleClass("expander-hidden expander-line");
  });

	$('#js-expander-trigger-4').click(function(){
    $(this).toggleClass("expander-hidden expander-line");
  });
});
