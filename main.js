var myInput = document.getElementById("password");
let screenWidth = screen.width / 2;
let submitButton = document.getElementById('submitButton');

myInput.onmousemove = function(){
    var caracters = /[a-z]/g /* && /[A-Z]/g && /[0-9]/g && /\W|_/g */;
    
    if (myInput.value.match(caracters) /* && myInput.value.length >= 8  */){
        myInput.style.backgroundColor = "#8be78b"
		submitButton.style.left = 50 + '%';
		console.log("a")
    }else{
        myInput.style.backgroundColor = "#f1a9a9"
		
		const onMouseMove = (e) =>{
			let left = e.offsetX;
			if( left > screenWidth ){
				submitButton.style.left = e.pageX - 150 + 'px';
			}else{
				submitButton.style.left = e.pageX + 150 + 'px';
			}
		}
		document.addEventListener('mousemove', onMouseMove);
		console.log("b")
    }
}