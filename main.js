var myInput = document.getElementById("password");
let submitButton = document.getElementById('submitButton');
let iterator = 0;


myInput.onkeydown = function(){
	let characters = /[a-z]/g /* && /[A-Z]/g && /[0-9]/g && /\W|_/g */;
	
	if(myInput.value.match(characters) && myInput.value.length > 8){
		myInput.style.backgroundColor = "#8be78b"
		submitButton.onmouseenter = () => {
			submitButton.style.left;
		}
	}else{
		myInput.style.backgroundColor = "#f1a9a9"
		console.log("teste");
		// var wa = await(2);
		submitButton.onmouseenter = () =>{
			iterator++;
			iterator = iterator % 2;
			if(iterator === 0 ) {
				submitButton.style.left = 95 + 'vh';
			}else if(iterator === 1){
				submitButton.style.left = 115 + 'vh';
			}
		}
	}
}
d