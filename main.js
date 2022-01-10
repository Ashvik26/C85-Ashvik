var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var carwidth=100;
var carheight=90;
var carx=10;
var cary=325;

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	backcanvas_img=new Image();
    backcanvas_img.src=background_image;
    backcanvas_img.onload=uploadBackground;

    carcanvas_img=new Image();
    carcanvas_img.src=greencar_image;
    carcanvas_img.onload=uploadgreencar;
}

function uploadBackground() {
	ctx.drawImage(backcanvas_img,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(carcanvas_img,carx,cary,carwidth,carheight);

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
	if(cary>=0){
        cary=cary-10;
  uploadBackground();
  uploadgreencar();
    }
}

function down()
{
	if(cary<=500){
        cary=cary+10;
  uploadBackground();
  uploadgreencar();
    }
}

function left()
{
	if(carx>=0){
        carx=carx-10;
  uploadBackground();
  uploadgreencar();
    }
}

function right()
{
	if(carx<=700){
        carx=carx+10;
  uploadBackground();
  uploadgreencar();
    }
}
