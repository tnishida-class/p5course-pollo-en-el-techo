// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      let k = i+j
        // i+jは別の文字定義してみたが、検証したらプラスの記号あかんて言われた。先にK宣言しなあかんかったわ！
    if(k % 2 == 0){
      fill('white')
    }
    else{
      fill('gray')
    }
    rect(size * i,size * j,25,25)
    // rectの座標めちゃくちゃ間違ってた。修正したけど点々になっちゃった。サイズ目分量で調整したら耐えた
    if(k % 2 ==1 && j < 3 ){
      fill('red')
    }
    else if (k % 2 ==1 && j > 4){
      fill('black')
    }
    else{
      noFill()
    }
    ellipse(size*i+ 25/2, size*j+ 25/2, 20)
    // 何回か試して半径20なの当てた笑
    }
  }
}
// やった～～～！！！できた～～！！！天才だ～～
// i+jの代数を宣言するところ、rectの座標設定を変数使う所、modを使う条件、かつ条件(&&)の設定に手間取った。
// 半径の値を近づけるのも手作業だったし、j>4なのかj>5なのかみたいなところも手作業、、、笑
