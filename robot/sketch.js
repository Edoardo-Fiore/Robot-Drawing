function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(10);

	//robots head
	fill(238,130,238);
	rect(100, 100, 300, 300, 80);


	//robots antenna
    strokeWeight(6);
	fill(47,79,79);
	ellipse(250, 50, 60, 60);

	fill(200, 60, 60);
	rect(210, 80, 80, 30);

	//robots eyes
    strokeWeight(13);
	fill(0,255,255);
	ellipse(175, 200, 100, 100);
	point(175, 200);
    strokeWeight(8);
    fill(0,255,0);
	ellipse(325, 200, 40, 40);
	point(325, 200);


	//robots nose
    strokeWeight(6);
	fill(255, 0, 0);
	triangle(250, 220, 222, 265, 277, 265);

	//robots ears
    fill(65,105,225);
    strokeWeight(6);
	rect(80, 180, 30, 100);
    fill(250,128,114);
	rect(390, 180, 30, 100);

	//robots mouth
    strokeWeight(6);
	fill(218 ,165,32);
	beginShape();
	ellipse(250,340, 150,50);
    line(176,340,325,340);
    line(188,354,188,328);
    line(208,321,208,360);
    line(228,319,228,360);
    line(248,317,249,362);
    line(269,318,269,360);
    line(290,319,290,360);
    line(309,326,309,355);
    
    
	
	endShape();
}