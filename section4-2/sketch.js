//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  count = 0;
}

function draw(){
  // drawの中ではひたすら描画してちょっとずつ動かす
  count ++;
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }

 if(count % 30 == 0){
  const b = { x: width/2, y: height/2, size: random(20) + 10, vx: random(-2, 2), vy: random(-2, 2)}
  balls.push(b);
  // 減らす条件設定がむずい！増やすとこまではできた。→drawをカウントしておいて、それが割り切れたとき描画する
 }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: random(20) + 20, vx: dx, vy: dy };
    balls.push(b);
    // 描画の指示は出さずに、データだけ用意しておいて書いてもらう
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
