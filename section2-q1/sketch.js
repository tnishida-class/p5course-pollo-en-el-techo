// 小手調べ
function setup(){
  createCanvas(200,200)
  noFill();
  for(let i = 0; i < 10; i++){
    // 手順は、変数の宣言と動きの定義、色とか太さとか決めてあげる、描く。
  if(i<5){
    stroke('blue')
  }
  else{
    stroke('red')
  }
  ellipse(100,100,i*10+10)
  // やった～～！良い感じにできた！天才かもしれない！！
  }
}
