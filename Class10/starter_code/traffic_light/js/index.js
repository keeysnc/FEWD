//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function(){

//code goes in this area
$('#stopButton').click(illuminateStopLightRed);

	function clearLights(){
		$('.bulb').css('background-color', 'black');
	}

	function illuminateStopLightRed(){
		$('#stopLight').css('background-color','red');
	}

$('#goButton').click(illuminateGoLightGreen);

	function clearLights(){
		$('.bulb').css('background-color', 'black');
	}

	function illuminateGoLightGreen(){
		$('#goLight').css('background-color','green');
	}





});