var canvas = document.getElementById("my_canvas");

pen = canvas.getContext("2d");

var img_i;

img_width = 300;

img_height = 100;

img_x = 100;

img_y = 100; 

function add(){
	img_i_Tag = new Image(); 

	img_i_Tag.onload = uploadimg;
	
	img_i_Tag.src = img_i; 
}

function uploadimg() {

	pen.drawImage(img_i_Tag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
	
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){

			alpha_key();

			document.getElementById("d1").innerHTML="You pressed the alphabet key";

			console.log("alphabet key")
		
			
	}



	else if((keyPressed >= 48 && keyPressed <= 57)){

		num_key();

	document.getElementById("d1").innerHTML = "You pressed the number key";

	console.log("number key")

	}

	else if((keyPressed >= 37 && keyPressed <= 40)){

		arrow_key();

	document.getElementById("d1").innerHTML = "You pressed the arrow key";

	console.log("arrow key")

	}

	else if((keyPressed >= 17 && keyPressed <=18)|| (keyPressed == 27)){

		sp_key();

	document.getElementById("d1").innerHTML = "You pressed the special key";

	console.log("special key")

	}
	 
	else{

		other_key();

		document.getElementById("d1").innerHTML = "You pressed the other key"

		console.log("other key")

	}
}

function alpha_key()
{
	img_i = "alpha.png";

	add();

}
function num_key()
{

	img_i = "num.png";

	add();
	
}
function arrow_key()
{

	img_i = "arrow.png"

	add();
}
function sp_key()
{

	img_i = "sp.png";

	add();
	
}
function other_key()
{
	img_i="other.png";

	add();
}
	
