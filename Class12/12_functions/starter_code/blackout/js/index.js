$(document).ready(function(){

var lights ='on';

//listener
$('#light_switch').click(switchLights);
	
	//test to see if lights are on
	function switchLights(){
		if(lights === 'on'){
			$('body').css('background' , 'black');
			lights = 'off';

		//test to see if lights are off
		}else if(lights == 'off'){
			$('body').css('background' , 'white');

			//updating variable (turn lights back on if they are off)
			lights = 'on';
		}

		

	}

});