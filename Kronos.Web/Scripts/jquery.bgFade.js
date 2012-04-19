/*
 * jQuery bgFade
 * Copyright 2010 Jake Lauer with Clarity Design (isthatclear.com)
 * Released under the MIT and GPL licenses.
 */
( function( $ ){
	$.fn.bgFade = function( action, options ) {
	
		if ( action == 'fadeIn' ) {
			var defaults = {
				top: "",
				left: "",
				height: "",
				width: "",
				fadeSpeed: 200,
				fadeToOpacity: 1,
				animate: false
			};
		} else if ( action == 'fadeOut' ) {
			var defaults = {
				top: "",
				left: "",
				height: "",
				width: "",
				fadeSpeed: 200,
				fadeToOpacity: 0,
				animate: false
			};
		}

		var options = $.extend( defaults, options );

		return this.each( function() {
			
			if ( action=='fadeIn' ) {
				if ( $( this ).css( 'position' ) == "static" ) {
					$( this ).css( {position: 'relative'} );
				}
				if ( (options.fadeToOpacity == 1) || ( (options.fadeToOpacity < 1) && $(this).find( '.bg_fade' ).length == 0 ) ){
					$( this ).append( '<span class="bg_fade"></span>' )
				}
			}
			var fader = $( this ).find( '.bg_fade' );
			var aThis = $( this );

			if ( options.top == "" ) {
							if ( fader.css( 'top' ) == '0px' ) {
								fTop = 0;
							} else {
								fTop = fader.css( 'top' );
							}
						} else {
							fTop = options.top;
						}
	
						if ( options.top != "" && action != 'fadeIn' ) {
							fTop = options.top;
						} else if ( options.top == "" && action != 'fadeIn' ) {
							fTop = 0;
						}
				
			if ( options.left == 0 ) {
							if ( fader.css( 'left' ) == '0px' ) {
								fLeft = 0;
							} else {
								fLeft = fader.css( 'left' );
							}
						} else {
							fLeft = options.left;
						}
	
						if ( options.left != "" && action != 'fadeIn' ) {
							fLeft = options.left;
						} else if ( options.left == "" && action != 'fadeIn' ) {
							fLeft = 0;
						}

			if ( options.width == "" ) {
							if ( fader.css( 'width' ) == '0px' ) {
								fWidth = 0;
							} else {
								fWidth = fader.css( 'width' );
							}
						} else {
							fWidth = options.width;
						}
	
						if ( options.width != "" && action != 'fadeIn' ) {
							fWidth = options.width;
						} else if ( options.width == "" && action != 'fadeIn' ) {
							fWidth = $( this ).width();
						}
						
						
			if ( options.height == "" ) {
							if ( fader.css( 'height' ) == '0px' ) {
								fHeight = 0;
							} else {
								fHeight = fader.css( 'height' );
							}
						} else {
							fHeight = options.height;
						}

						if ( options.height != "" && action != 'fadeIn' ) {
							fHeight = options.height;
						} else if ( options.height == "" && action != 'fadeIn' ) {
							fHeight = $( this ).height();
						}
						
			if ( $(this).find('a').length > 0 && fader.size() == 1) {
				var linkText = $(this).find('a').text();
				var linkHTML = $(this).find('a').html( $(this).find('a').clone() ).html().replace(linkText,'');
				$(this).find('a').not(':first').remove();
				linkHTML = linkHTML.replace('href', 'class="appendedLink" style="display:block;width:100%;height:100%;" href');
				if ($(this).find('.bg_fade').html() == ""){
						fader.html('<a class="appendedLink" href="http://google.com" style="display:block;width:' + fWidth + ';height:' + fHeight + ';"></a>');
				}
			}
			
			if ( action == 'fadeIn') {
				fader.css({opacity: 0});
			}
			
			if ( options.animate == false ) {
				fader.css( {
					top:fTop, 
					left:fLeft, 
					width: fWidth, 
					height: fHeight
				} );
			}
			
			if( action == 'fadeIn' ) {
				bgFadeOn( options, fader, aThis );
			} else if ( action == 'fadeOut' ){
				bgFadeOff( options, fader, aThis );
			}
		} );
		
		function bgFadeOn ( options, fader, aThis ) {
			fader.siblings().not('a').remove();
			if ( options.animate == true ) {
				if ($.browser.opera) {
					aThis.css({
						top:fader.css('top'),
						left:fader.css('left')
					});
				}
				aThis
					.stop()
					.animate( {
						top:fTop,
						left:fLeft,
						width: fWidth,
						height: fHeight
						},
					options.fadeSpeed );
				fader
					.stop()
					.animate( {
						opacity: options.fadeToOpacity,
						width: fWidth,
						height: fHeight
						}, 
					options.fadeSpeed );
			} else {
				fader
					.stop()
					.animate( {opacity: options.fadeToOpacity}, options.fadeSpeed );
			}
		}

		function bgFadeOff ( options, fader, aThis ) {
			if ( options.animate == true ) {
				aThis
					.stop()
					.animate( {
						top:fTop, 
						left:fLeft, 
						width: fWidth, 
						height: fHeight 
						}, 
					options.fadeSpeed );
				fader
					.stop()
					.animate( {
						opacity: options.fadeToOpacity
						},
					options.fadeSpeed, 
						function() { 
							if( options.fadeToOpacity == 0 ){
								$( this ).remove(); 
							} else {
								$( this ).parent().find( '.bg_fade' ).not( $( this ) ).remove();
							}
						}
					 );
			} else {
				fader
					.stop()
					.animate( {
						opacity: options.fadeToOpacity
						},
					options.fadeSpeed, 
						function() { 
							if( options.fadeToOpacity == 0 ){
								$( this ).remove(); 
							} else {
								$( this ).parent().find( '.bg_fade' ).remove();
							}
						}
					 );
			}
		}

	};

} )( jQuery );