var form=$('form');
var toggleButton=$('.toggle-button');


toggleButton.on('click', function() {
	form.slideToggle(1000);
});

