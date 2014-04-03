
	// Theme Panel Open/Close
	$( "#theme-panel .panel-button" ).click(function(){
		$( "#theme-panel" ).toggleClass( "close-theme-panel", "open-theme-panel", 1000 );
		$( "#theme-panel" ).toggleClass( "open-theme-panel", "close-theme-panel", 1000 );
		return false;
	});
	//Navigation Color
	$( "#theme-panel .menu-switcher-black" ).click(function(){
		 $('#navigation').removeClass('white-nav').addClass('dark-nav');
		return false;
	});

	$( "#theme-panel .menu-switcher-white" ).click(function(){
		$('#navigation').removeClass('dark-nav').addClass('white-nav');
		return false;
	});

	// Color Skins
	$('.switcher').click(function(){
		var title = jQuery(this).attr('title');		
		jQuery('#changeable-colors').attr('href', 'css/colors/' + title + '.css');				
	  	return false;
    });	
