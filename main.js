canvas= document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
greenCar_width=75;
greenCar_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greenCar_x=5;
greenCar_y=225;
function add() {
	background_imgTag=new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=background_image;

	greencar_imgTag=new Image();
	greencar_imgTag.onload=uploadgreencar;
	greencar_imgTag.src=greencar_image;

}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)
	
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag,greenCar_x,greenCar_y,greenCar_width,greenCar_height)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(greenCar_y>=0){
greenCar_y=greenCar_y-10;
uploadBackground();
uploadgreencar();
}
}

function down()
{
	if(greenCar_y<=400){
		greenCar_y=greenCar_y+10;
		uploadBackground();
		uploadgreencar();
		}
}

function left()
{
	if(greenCar_x>=0){
		greenCar_x=greenCar_x-10;
		uploadBackground();
		uploadgreencar();
		}
}
function right()
{
	if(greenCar_x<=800){
		greenCar_x=greenCar_x+10;
		uploadBackground();
		uploadgreencar();
		}
}
