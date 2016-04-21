var objects = ['assets/img/huskypup.jpg',
				'assets/img/wheatenpup.jpg', 
				'assets/img/australianpup.jpg', 
				'Meow', 
				'...', 
				'Woof',
				'Meep'];

var colors = ['red', 'blue', 'yellow'];

$('.button').click(function() {
	var random_object_number = Math.floor(Math.random() * objects.length),
		random_color_number  = Math.floor(Math.random() * colors.length),
		object_to_use		 = objects[random_object_number],
		color_to_use		 = colors[random_color_number],
		result				 = '';

	if (random_object_number > 2) {
		result = '<span class="object ' + color_to_use + ' "> ' + object_to_use + '</span>';
	} else {
		result = '<img class="object ' + color_to_use + ' "src=" ' + object_to_use + '" />';
	}
		// result = '<span class="' + color_to_use + '"> ' + object_to_use + ' </span>';


	$('.content').prepend(result);
	// $('.content').append(objects[random_object_number]);
	// $('.content').append('<img src="assets/img/huskypup.jpg"/>');
});