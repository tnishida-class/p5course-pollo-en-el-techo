// 最終課題を制作しよう

let balls = [];
let b1 = { x:600, y:400, vx:1, vy:2, size:50, color:'#e4011e'}
balls.push(b1);
let b2 = { x:800, y:200, vx:2, vy:2, size:30, color:'#d5a403'}
balls.push(b2);
let b3 = { x:900, y:500, vx:3, vy:-2, size:30, color:'#1b973a'}
balls.push(b3);
let b4 = { x:700, y:500, vx:1, vy:1, size:30, color:'#c40e28'}
balls.push(b4);
let b5 = { x:500, y:600, vx:2, vy:-2, size:30, color:'#e63317'}
balls.push(b5);
let b6 = { x:1000, y:600, vx:3, vy:1, size:50, color:'#00a5d8'}
balls.push(b6);
let b7 = { x:1000, y:400, vx:1, vy:2, size:50, color:'#fabd00'}
balls.push(b7);
let b8 = { x:500, y:400, vx:2, vy:-1, size:40, color:'#970a32'}
balls.push(b8);
let b9 = { x:700, y:200, vx:3, vy:1, size:40, color:'#eb6905'}
balls.push(b9);
let b10 = { x:900, y:300, vx:-2, vy:2, size:30, color:'#dd1367'}
balls.push(b10);
let b11 = { x:800, y:300, vx:-1, vy:-2, size:30, color:'#f5a20b'}
balls.push(b11);
let b12 = { x:600, y:250, vx:-3, vy:2, size:50, color:'#d39206'}
balls.push(b12);
let b13 = { x:1000, y:350, vx:-2, vy:-1, size:40, color:'#3e7834'}
balls.push(b13);
let b14 = { x:500, y:450, vx:-1, vy:-1, size:20, color:'#0075ba'}
balls.push(b14);
let b15 = { x:900, y:550, vx:-3, vy:1, size:40, color:'#28a838'}
balls.push(b15);
let b16 = { x:800, y:150, vx:-2, vy:-2, size:20, color:'#004c88'}
balls.push(b16);
let b17 = { x:700, y:650, vx:-1, vy:1, size:30, color:'#023067'}
balls.push(b17);


function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(255, 255, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    noStroke();
    fill(b.color);

    ellipse(b.x, b.y, b.size)

    b.x += b.vx;
    b.y += b.vy;
    if(b.x < 0 || b.x > width){ b.vx = -1 * b.vx; }
    if(b.y < 0 || b.y > height){ b.vy = -1 * b.vy; }
    b.x = constrain(b.x, 0, width);
    b.y = constrain(b.y, 0, height);

    let size = 30;
    textSize(size); fill(b1.color); text('No Poverty', 10, 30);
    textSize(size); fill(b2.color); text('Zero Hunger', 10, 60);
    textSize(size); fill(b3.color); text('Good Health and Well-Being', 10, 90);
    textSize(size); fill(b4.color); text('Quality Education', 10, 120);
    textSize(size); fill(b5.color); text('Gender Equality', 10, 150);
    textSize(size); fill(b6.color); text('Clean Water and Sanitation', 10, 180);
    textSize(size); fill(b7.color); text('Affordable and Clean Energy', 10, 210);
    textSize(size); fill(b8.color); text('Decent Work and Economic Growth', 10, 240);
    textSize(size); fill(b9.color); text('Industry, Innovation and Infrastructure', 10, 270);
    textSize(size); fill(b10.color); text('Reduced Inequalities', 10, 300);
    textSize(size); fill(b11.color); text('Sustainable Cities and Communities', 10, 330);
    textSize(size); fill(b12.color); text('Responsible Consumption and Production', 10, 360);
    textSize(size); fill(b13.color); text('Climate Action', 10, 390);
    textSize(size); fill(b14.color); text('Life Below Water', 10, 420);
    textSize(size); fill(b15.color); text('Life On Land', 10, 450);
    textSize(size); fill(b16.color); text('Peace Justice and Strong Institutions', 10, 480);
    textSize(size); fill(b17.color); text('Partnerships for the Goals', 10, 510);


  }
}




function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
