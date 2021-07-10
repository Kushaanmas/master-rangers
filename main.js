
var canvas=new fabric.Canvas('myCanvas');
 ranger_y=1;
 ranger_x=1;

ranger_image_width = 350;
ranger_image_height = 430;

var block_image_object= "";

function new_image(get_image)
     {
	fabric.Image.fromURL(get_image)
		ranger_image_object=Img;
		ranger_image_object.scaleToWidth(ranger_image_width);
		ranger_image_object.scaleToHeight(ranger_image_height);
		ranger_image_object.set({
			top:ranger_y,left:ranger_x
		}
		);
		canvas.add(ranger_image_object);
	}
		
	


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		ranger_x = 100;
		new_image('rr1.png')
	}
	if(keyPressed == '71')
	{
		ranger_x = 200;
		
	}
	
	if(keyPressed == '89')
	{
		ranger_x =350;
		
	}
	if(keyPressed == '80')
	{
		ranger_x = 600;
		
	}
	if(keyPressed == '66')
	{
		ranger_x = 700;
	
	}
	
}

