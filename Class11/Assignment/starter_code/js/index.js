/*
//When a user hits "update" change the city name that the 
user entered and test to see what city it is. 
If the city is new york update the background to newyork image
If the city is San Fran update the background to San Fran image
If the city is LA update the background to LA image
If the city is NYC update the background to NYC....
*/

$(document).ready(function(){

	$('#submit-btn').click(changeBackground);

	function changeBackground(event){
		event.preventDefault();
		var city = $('#city-type').val(); //.val stores value

		if(city === "New York" || city === "NYC" || city === "New York City"){
			$('body').attr('class','nyc');
		}
	}

	$('#submit-btn').click(changeBackground);

	function changeBackground(event){
		event.preventDefault();
		var city = $('#city-type').val();

		if(city === "San Francisco" || city === "San Fran" || city === "SF"){
			$('body').attr('class','sf');
		}
	}




});
