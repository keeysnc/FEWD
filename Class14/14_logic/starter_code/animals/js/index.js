/*



*/
$(document).ready(function(){

 var animals = ['animal1.jpg', 'animal2.jpg', 'animal3.jpg', 
 'animal4.jpg','animal5.jpg','animal6.jpg','animal7.jpg',]

var i = 0;

//Events

$('#next').click(goToNextAnimal);
$('#back').click(goToPreviousAnimal);


//Define Functions to clicks

function goToNextAnimal(){

	if(i === animals.length - 1){
	i=0;
	}else {
			i++;
		}
	}
	
	i++;

	var nextAnimal = animals[i];
	console.log('animal' + nextAnimal);

	$('#image-to-vote-on').attr('src', 'images/' + nextAnimal);
}



function goToPreviousAnimal(){

	i--;

	var nextAnimal = animals[i];
	console.log('animal' + nextAnimal);

	$('#image-to-vote-on').attr('src', 'images/' + nextAnimal);





}

});