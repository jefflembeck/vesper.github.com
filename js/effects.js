jQuery(document).ready(function($) {
		
	hideAddressBar();
	
    $(window).bind('orientationchange', function () {
		switch(window.orientation) {
			case 0:
			case 180:
				hideAddressBar(); break;
			case -90:
			case 90:
				hideAddressBar(); break;
		}
    });
	
	function hideAddressBar() {
		window.scrollTo(0, 0);
	}
	
	$('a.tip').mouseenter(function() {
		var msg   = $('div#tip_msg');
		var arrow = $('div#arrow');
		var link  = $(this);
		var tip   = link.attr('title');
				
		$(this).attr('title', '');
				
		msg.html(tip);
				
		arrow.css({
			left: link.offset().left + link.width()/2 - arrow.outerWidth()/2,
			top: link.offset().top - arrow.outerHeight()
		}).show();
				
		msg.css({
			left: link.offset().left + link.width()/2 - msg.outerWidth()/2,
			top: link.offset().top - arrow.outerHeight() + 1 - msg.outerHeight()
		}).show();
	}).mouseleave(function() {
		$('div#tip_msg, div#arrow').hide();
		$(this).attr('title', $('div#tip_msg').html());
	});

});