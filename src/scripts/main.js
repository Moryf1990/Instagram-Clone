import $ from 'jquery';

// const form=$('form');
// const toggleButton=$('.toggle-button');
// const url='http://tiyfe.herokuapp.com/collections/morrisfriedman';
// const imageButton=$('.image-button');
// const input=$('.input');
// const text=$('.text');
// const photoBooth=$('.photobooth');

// toggleButton.on('click', function() {
// 	form.slideToggle(1000);
// });

// $.get(
// 	url,
// 	(response) => {
// 		response.forEach(function(result, index) {
//             photoBooth.append('<img src="'+result.url+'" width=80%, height=50%>' + '<div>'+result.caption+'</div>');
// 		});
// 	}
// );

// imageButton.on('click', function(e) {
// 	e.preventDefault();
// 	const newInput=input.val();
// 	const newText=text.val();

// 	$.post(
// 		url,
// 		{url: newInput, caption: newText},
// 		(result) => {
// 			photoBooth.append('<img src="'+result.url+'">' + '<div">'+result.caption+'</div>');
// 			input.val('');
// 			text.val('');
// 		},
// 		'json'
// 	)
// });


const form=$(`form`);
const toggleButton=$(`.toggle-button`);
const url=`http://small-tiyfe.herokuapp.com/collections/morrisfriedman`;
const imageButton=$(`.image-button`);
const input=$(`.input`);
const text=$(`.text`);
const photoBooth=$(`.photobooth`);

toggleButton.on(`click`, () => {
	form.slideToggle(1000);
});

$.get(
	url,
	(response) => {
		response.forEach ((result, index) => {
            photoBooth.append(`<img src="`+result.url+`" width=80%, height=50%>` + `<div>`+result.caption+`</div>`);
		});
	}
);

imageButton.on(`click`,(e) => {
	e.preventDefault();
	const newInput=input.val();
	const newText=text.val();

	$.post(
		url,
		{url: newInput, caption: newText},
		(result) => {
			photoBooth.append(`<img src="`+result.url+`">` + `<div">`+result.caption+`</div>`);
			input.val(``);
			text.val(``);
		},
		`json`
	)
});