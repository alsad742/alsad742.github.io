var objects = ['assets/img/huskypup.jpg',
				'assets/img/wheatenpup.jpg', 
				'assets/img/australianpup.jpg', 
				'assets/img/cat1.jpg', 
				'assets/img/cat2.jpg', 
				'assets/img/cat3.jpg'];



$('.button').click(function() {
	var random_object_number = Math.floor(Math.random() * 6),
		object_to_use		 = objects[random_object_number],
		result				 = '';

	if (random_object_number < 3) {
		result = '<img class="object  "src=" ' + object_to_use + '" />';	
	} else {
		result = '<img class="object  "src=" ' + object_to_use + '" />';
	}

	
		// result = '<span class="' + color_to_use + '"> ' + object_to_use + ' </span>';


	$('.content').prepend(result);
	// $('.content').append(objects[random_object_number]);
	// $('.content').append('<img src="assets/img/huskypup.jpg"/>');
});


