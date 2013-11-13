/**
 * Main JS file for Subtelle behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

		$('body').fadeIn(700);
		$( ".post_content p:first" ).addClass('post_excerpt');
		$('.header').parallax("50%", 0.4);
		$('.single_post_header').parallax("50%", 0.7);
		
		$( ".main_post" ).each(function() {
			var lastSrc = '';  
			$.fn.ifExists = function(fn) {
			  if (this.length) {
				$(fn(this));
			  }
			};
			
			var $featuredimg = $("img[alt='cover']");
			
			$featuredimg.ifExists(function(){
			
				$featuredimg.addClass('hide');
				lastSrc = $featuredimg.attr('src');
				
				$('.single_post_header').css(
					'background-image','url('+ lastSrc +')',
					'width','100%'
				);
				
			});			

			$('iframe').ifExists(function(){
				$('iframe').wrap( "<div class='videoWrapper'></div>" );
			});
		
		});
    });

}(jQuery));