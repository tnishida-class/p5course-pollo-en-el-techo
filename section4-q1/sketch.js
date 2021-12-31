// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  const h = height * scores[i] / 100;
  let px, py; // 線を引くために一つ前の点を覚えておく変数

  for(let i = 1; i < scores.length; i++){
    point(i * dx, height - h);
    strokeWeight(10);
// pxとpyをどう活用すればいいか分からず、途中で止まってしまいました。
  }
}
