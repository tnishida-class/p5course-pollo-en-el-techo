// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
}

function draw(){
  background(255)
  balloon("I love Vaundy", mouseX, mouseY, 'red');
  // テキストも動かしてあげる
}

function balloon(t, x, y, bc){
  push();
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(bc);
  noStroke();
  rect(x, y, w + p * 2, h + p * 2);
  //同じfillでしたいからここに書く！
  triangle(x + 5, y + h, x, y + h + 10, x + 20, y + h);
  fill(255);
  noStroke();
  text(t, x + p, y + h + p);
  pop();
}
