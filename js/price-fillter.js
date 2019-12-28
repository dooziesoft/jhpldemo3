;(function($){
    "use strict"

var marginSlider = document.getElementById('price-range');

	noUiSlider.create(marginSlider, {
		start: [150, 600],
		connect: true,
		range: {
			'min': 0,
			'max': 750
		}
	});
	
	var marginMin = document.getElementById('price-min'),
	marginMax = document.getElementById('price-max');

	marginSlider.noUiSlider.on('update', function (values, handle) {
		if (handle) {
			marginMax.innerHTML = values[handle];
		} else {
			marginMin.innerHTML = values[handle];
		}
	});


})(jQuery)