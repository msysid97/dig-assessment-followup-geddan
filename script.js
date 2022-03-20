'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor)

const promise = "揺れる　廻る　振れる　切ない気持ち\n二人で一緒に眠る　Winter Land\nあなただけ見つめて　私だけ見つめて\n明日を誓う\nぎゅっと　抱かれ　燃える恋心\n激しく　舞い散る　雪に包まれて\n永遠に愛してる　今日より愛してる\nずっと　Eternal Love\n";

const geddan = [
  { name: "START", pass: "media/neutral.png" },
  { name: "ゲ", pass: "media/GE.png" },
  { name: "ッダン", pass: "media/DDAN.png" },
  { name: promise, pass: "media/geddan-meme.gif" },
  { name: "スン...", pass: "media/neutral.png" },
];
let geddanStage = 0;

function changeColor() {
  console.log('Button clicked!'); // feel free to change/delete this line
  document.body.style.backgroundColor = getRondomColor();
  geddanStage < geddan.length - 1 ? geddanStage++ : geddanStage = 0;
  document.querySelector("#color-button").innerText = geddan[geddanStage].name;
  document.querySelector("#image").innerHTML = `<img src=\"${geddan[geddanStage].pass}\">`;
}

function getRondomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}