(function( $ ) {
	$.fn.nb2sb = function( options ) {
		var json,
			defaults		= {
				set: {
					opener: undefined,
					content: undefined
				},
				style: {}
			},
			config		= $.extend( true, defaults, options ),
			cusStyle		= config.style,
			$nav			= $( this ),
			$btn			= $( config.set.opener ),
			$ctn			= $( config.set.content ),
			$ul			= $ctn.children(),
			ulClass		= $ul.prop('class');
			
		//nav default style
		var defNbStyle = {
			height: $nav.height(),
			backgroundColor: $nav.css('background-color'),
			zIndex: $nav.css('z-index'),
			minHeight: $nav.css('min-height')
		},
		//Sidebar Style
			defStyle		= {
				position: 'fixed',
				top: defNbStyle.minHeight,
				right: 0,
				bottom: 0,
				backgroundColor: defNbStyle.backgroundColor,
				zIndex: defNbStyle.zIndex - 1
			},
			sbStyle = $.extend( {},  cusStyle, defStyle ),
			sbClass = "nav nav-pills nav-stacked nb2sb-active";
		
		$( window ).resize(function() {
			var $w	= $(this),
				w		= $w.width();
				
			if ( 768 > w ) {
				$ul
					.removeClass( ulClass )
					.addClass( sbClass  );
			} else {
				$ul
					.removeClass( sbClass )
					.addClass( ulClass );
			}
			
			if ( $ul.hasClass( 'nb2sb-active' ) ) {
				$ctn.css( sbStyle );
			} else {
				$ctn.removeAttr( 'style' );
			}
			
		});
		$( window ).resize();
			
		return this;
	};
})( jQuery );
