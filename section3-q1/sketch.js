// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 200;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function draw(){
  background(160, 192, 255);

  if(keyIsDown(" ".charCodeAt(0))){
    count = (count + 5) % cycle;
  }
  // cycleが100になったら余りは1に戻るよねってこと。
  else{
    count = (count + 1) % cycle;
  }

  if(count < 100){
    ellipse(width / 2, height / 2, count);
  }
  else{
    ellipse(width / 2, height / 2, 200 - count);
  }

}

// 難しい
