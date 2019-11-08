




// fluffy bird
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext('2d');
var pipes = [
{
	x: cvs.width,
	y: 0
}
];
var birdY = 150;
var animate = true;
var bird = new Image();
var bg = new Image();
var land = new Image();
var deed = new Image();
var dood = new Image();
	bird.src = "../images/bird.png"    /* bird.src ni tuhain zuragnii source g ni zaaj ogoh ba ../ ni neg folder garna, daraa ni images folder luu orood zurgiig zaaj ogsn bga */
	bg.src = "../images/bg.png"
	land.src = "../images/land.png"
	deed.src = "../images/deed.png"
	dood.src = "../images/dood.png"
var gravity = 1.5;
document.addEventListener("keydown", birdUp); /*mouset haritsah uildluudiig hariutsdg bga*/
addEventListener("mousedown", birdUp);
function birdUp(event){
	console.log();
	if(event.keyCode == 13 ){
		gravity += 5;
	} else if (event.keyCode == 38){
		gravity -= 5;
	}
	setTimeout(() => {
		gravity = 1.5;
	} , 100);
}

	function birds() {
		ctx.drawImage(bg, 0, 0);
		ctx.drawImage(bird, 20, birdY);   /*canvas iin deed tlaas 150px ene n y tenhleg, zuun tlasa x tenhlgiin daguu 20px*/
		birdY+=gravity;
		for(var i = 0; i < pipes.length; i++ ) {
			var cons = deed.height + 80;
			ctx.drawImage(deed, pipes[i].x, pipes[i].y);
			ctx.drawImage(dood, pipes[i].x, pipes[i].y + cons);


			pipes[i].x--; /* '-= 1.5' x tenhlgiin daguu buyu bairshlasa hasagdj unshina. harin udaan baiwal -= gwel tuhain px eer hasna gsen ug*/
			//console.log(pipes[i].x)
			if(pipes[i].x == 95) {
				pipes.push({
					x: cvs.width + (Math.floor(Math.random() * 30) - 10),
					y: Math.floor(Math.random()*deed.height) - deed.height
				})
			}
			if(pipes[i].x <= (bird.width + 20.5) && ((birdY + bird.height) >= (pipes[i].y + cons) || (birdY + bird.height) <= (pipes[i].y + deed.height) || ((birdY + bird.height) + 20 >= cvs.height ))) {
				animate = false;
			}
				if (birdY < 0)  {
                 animate = false;                   
                 }
			
		}
		ctx.drawImage(land, 0, cvs.height - (land.height - 10));
		ctx.fillText('Score : 0' , 50 ,cvs.height - ((land.height - 10) / 2));
		ctx.font = '21px Arial';
		if(animate){
			requestAnimationFrame(birds);
		}
		
	}
	birds();