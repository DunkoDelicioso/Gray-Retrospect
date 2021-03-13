
let anima;
let pip = 1;
let val = 1;
let noiser = 0;
let noiser1 = 1000;
let noiser2 =  2000;
let xoff = 0;
let yoff = 0;
let zoff = 0;
let m;
let p;
let q;
let slop;
let angles = [];
let sloppy = 0;
let player = false;
let s;
let texts =[s, p];
let i = 0;
let first;

function preload() {

  gif_createImg = createImg("1small.gif");
  gif_createImg1 = createImg("ezgif.com-gif-maker (5).gif");
  gif_createImg2 = createImg("hkjhkjhkjh.gif");
  gif_createImg.position(0,0);
  gif_createImg.size(1000,1000)
  gif_createImg1.position(100,2700);
  gif_createImg1.size(800,800)
  gif_createImg2.position(100,4900);
  gif_createImg2.size(800,800)

  song = loadSound('Lucid.mp3');
  s = loadStrings('Text.txt');
  text2 = loadStrings('Text1.txt');
  text3 = loadStrings('Text2.txt');

  
}



function setup() {
  createCanvas(1000, 7000);

  




}




function mousePressed() {
  if (mouseY < 800){ //range accounting for text length
    window.open('https://dunkodelicioso.github.io/Eco_Mobile/');
  }



player = true;
songer();
}

function songer(){
  if(player){
    song.play()
  }
}








function draw() {
  background(4);
  // image(first, 0, 0);
  

  

  fill(255)
  textFont('Arial')
  text(text2, 100, 3750, 770, 2000);
  text(text3, 100, 5900, 770, 2000);
  text("Click Cells", 400, 1300)
  text("Click brain to grow Gristedes Panorama", 170, 1060)
  


  if(mouseY > 1000 && mouseY < 2500){
    fill(255, 230)
    noStroke()
    rect(20,1020,960,1650, 200)
    fill(0);
    textFont('Arial')
    text(s, 100, 1100, 770, 1500);
    song.setVolume(.03)
  
  }else{
    song.setVolume(.1)
  }





  anima = new animal(m/5,25,250,1500,m, 2)
  anima1 = new animal(p/10,25,500,1500,p, 2)
  anima2 = new animal(q/20,30,750,1500,q, 2)

  anima.display();
  anima1.display();
  anima2.display();

  strokeWeight(2)
  stroke(255)
  noFill()


  
  
  xoff = xoff + 0.001
  yoff = yoff + 0.003
  zoff = zoff + 0.009

  noiser = noise(xoff) * 250;
  noiser1 = noise(yoff) * 250;
  noiser2 = noise(zoff) * 250
  m = noiser 
  p = noiser1
  q = noiser2
  //console.log(mouseX, mouseY);
  fill(255)

  let idOne = m/5 
  let idTwo = p/10
  let idThree = q/20
  textSize(20)
  strokeWeight(0);
  text(idOne, 150, 1700)
  text(idTwo, 400, 1700)
  text(idThree, 650, 1700)
  textSize(40);
  sloppy = idOne + idTwo + idThree
  text(sloppy, 325, 2400)

  slop = sin(anima.phase + (TWO_PI * anima.r) / m ) * 100
  slop1 = sin(anima1.phase + (TWO_PI * anima1.r) / p ) * 100
  slop2 = sin(anima2.phase + (TWO_PI * anima2.r) / q ) * 100
  //console.log(slop);



  stroke(255)
  strokeWeight(2);
  noFill()
  beginShape();
  vertex(slop +600, 2100);
  vertex(slop1 + 200, 1750);
  vertex(slop2 + 800, 1750);
endShape(CLOSE);

beginShape();
vertex(slop +400, 1750);
vertex(slop1 + 500, 2100);
vertex(slop2 + 100, 1750);
endShape(CLOSE);

beginShape();
vertex(slop + 150, 1750);
vertex(slop1 + 500, 1750);
vertex(slop2 + 400, 2100);
endShape(CLOSE);

line(slop2 + 400, 2100, 500, 2300)
line(slop1 + 500, 2100, 500, 2300)
line(slop +600, 2100, 500, 2300)


  

  }


  class animal {
    constructor (x, y, z, w, m, p) {
      this.weight = p
      this.one = m
      this.inc = 0
      this.flux = x
      this.r1 = 0
      this.r = y
      this.phase = 0;
      this.posX = z
      this.posY = w
      
      this.pos = createVector(z,w)
      this.vel = createVector(0,0)
      this.acc = createVector(0,0)
      this.acc.div(random(0, 100));
      // this.vel += this.flux
      
    }
    
  display() {
      this.vel.add(this.acc)
      this.pos.add(this.vel)
      this.vel.div(pip);
      if(this.inc > 7){
        this.acc.x *= -1
        this.acc.y *= -1
      }
        if(this.vel.y < -7){
        this.acc.x *= -1
        this.acc.y *= -1
      }
      
      fill(255, 255)
      //text(this.inc, this.pos.x + 60, this.pos.y + 50);
    
      push();
      translate(this.pos.x, this.pos.y);
      
      stroke(255);
      strokeWeight(this.weight);
      noFill(0);
  
      this.inc = TWO_PI / (this.flux);
      this.phase *= -this.one
      beginShape();
      for (let a = 0; a < TWO_PI; a += this.inc) {
        this.r1 = this.r + sin(a * 10 + this.phase) * 50;
        this.posX = this.r1 * cos(a);
        this.posY = this.r1 * sin(a);
        curveVertex(this.posX, this.posY);
      }
      endShape(CLOSE);
   
      pop();
    }
    }
    
  



