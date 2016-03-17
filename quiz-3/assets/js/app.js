var color = "blue";
var wallet = 2000;
var converted_wallet = 0;
var conversion_rate = [0.88, 0.0090, 1.45];

function print_text(text) {
	$(".value").html(text);
}

function convert_currency (amount, converter) {

if (wallet > amount) {
	alert("The conversion rate from $1 to Japanese Yen is " + conversion_rate[1]);
} else {
	converted_wallet = converted_rate[1] * wallet;
	alert("Conversion successful");
	display_converted_wallet();
	alert("You now have " + converted_wallet)
}


}


$(".item").click(function() {
	var amount = $(this).data("wallet");
	var converter = $(this).data("currency");
	convert_currency(amount, converter);
}

