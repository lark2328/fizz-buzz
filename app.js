$(document).ready(function() {


for(var i = 1; i < 101; i++) {
	if(i % 3==0 && i%5==0) {
		$(".main").append("<li>Fizz Buzz</li");
	}
	 else if(i%3==0) {
	 	$(".main").append("<li>Fizz</li");
	 }
	 else if(i%5==0) {
	 	$(".main").append("<li>Buzz</li");
	 }
	 else {
	 	$(".main").append("<li>"+i+"</li");
	 }
}
});