// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let flagA = false;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('button#kaitou') 
b.addEventListener('click',hantei) 


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    kaisu++;
    let cnt = document.querySelector('span#kaisu')
    cnt.textContent=kaisu 
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  let y = document.querySelector('input#answer')
  let yoso = Number(y.value)
  let p = document.querySelector('p#result') 
  let s1="";
  //console.log(kaisu,"回めの予想:",yoso)
  
  // 課題3-1: 正解判定する
  if(flagA===true || kaisu>3){
    s1="答えは"+kotae+"でした。すでにゲームは終わっています"
  }
  else if(yoso===kotae){
    s1="正解です。おめでとう！"
    flagA=true;
  }else{
    if(kaisu===3){
        s1="まちがい。残念でした答えは"+kotae+"です。"
    }
    else if(yoso<kotae){
        s1="まちがい、答えはもっと大きいですよ"
    }else{
        s1="まちがい、答えはもっと小さいですよ"
    }
  }

  p.textContent=s1
}