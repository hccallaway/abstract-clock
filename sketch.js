function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(220);
	stroke(225);
	strokeWeight(5);
	
	push()
	fill(0,0,225,100);
	ellipse(400,300,second()*8,second()*8);
	pop()
	
	push()
	fill(225,0,0,100);
	ellipse(400,300,minute()*8,minute()*8);
	pop()
	
	push()
	fill(0,225,0,100);
	ellipse(400,300,hour()*8,hour()*8);
	pop()
}
