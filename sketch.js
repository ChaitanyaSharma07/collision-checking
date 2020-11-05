//declaring variables
var wall, bullet, thickness, speed, weight, damage, bulletImage;



function setup() {
	createCanvas(900, 800);
	thickness = random(22, 83);
	weight =  random(30, 52);
	speed = random(223, 321);
	wall = createSprite(700, 200, thickness, 800/2);
	bullet = createSprite(50, 200, 70, 20);
	bullet.velocityX = 60;
	bullet.shapeColor = "blue";
}

function draw() {
	background("black");
	
	if (collision(bullet, wall)) {
		bullet.velocityX = 0;
		damage = 0.5 * weight * speed * speed/ thickness ** 3;

		if (damage > 10) {
			wall.shapeColor = rgb(255, 0, 0);
		} else if (damage < 10){
			wall.shapeColor = rgb(0, 255, 0);
	}
}

	drawSprites();
}