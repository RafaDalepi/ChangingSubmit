var myInput = document.getElementById("password");
let submitButton = document.getElementById('submitButton');

myInput.onkeypress = function(){
	var characters = /[a-z]/g /* && /[A-Z]/g && /[0-9]/g && /\W|_/g */;
    
    if(myInput.value.match(characters) && myInput.value.length >= 8){
        
		myInput.style.backgroundColor = "#8be78b"
		submitButton.style.left = 50 + '%';

	}else{
		myInput.style.backgroundColor = "#f1a9a9"
		func();
	}
}

var func = () => {
	submitButton.onmouseover = evento;
}

var iterator = 0;

var evento = (mouseEvent) => {
	
	iterator++;
	iterator = iterator % 2;
	
	if(iterator === 0 ) {
		submitButton.style.left = mouseEvent.pageX - 150 + 'px';
	}
	if(iterator === 1){
		submitButton.style.left = mouseEvent.pageX + 150 + 'px';
	}
}
