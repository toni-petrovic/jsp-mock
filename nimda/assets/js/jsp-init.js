$(document).ready(function() {

	var fixHeight = function(){

		var mainHeight = $('.section-main').outerHeight();		
		$('.section-accordion').attr('style', 'min-height:' + mainHeight + 'px');

	};

	fixHeight();

});