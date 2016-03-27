var form=$('form');
var toggleButton=$('.toggle-button');
var url='http://tiyfe.herokuapp.com/collections/morrisfriedman';
var imageButton=$('.image-button');
var input=$('.input');
var text=$('.text');
var photoBooth=$('.photobooth');

toggleButton.on('click', function() {
	form.slideToggle(1000);
});

$.get(
	url,
	function(response){
		response.forEach(function(result, index) {
            photoBooth.append('<img src="'+result.url+'" width=80%, height=50%>' + '<div>'+result.caption+'</div>');
		});
	}
);

imageButton.on('click', function(e) {
	e.preventDefault();
	var newInput=input.val();
	var newText=text.val();

	$.post(
		url,
		{url: newInput, caption: newText},
		function(result) {
			photoBooth.append('<img src="'+result.url+'">' + '<div">'+result.caption+'</div>');
			input.val('');
			text.val('');
		},
		'json'
	)
});