// const text = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const text = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// ランダムな、文字と数字の組み合わせを作る
function getRndText() {
    let rndLetter1 = text[Math.floor(Math.random() * 26)];
    let rndLetter2 = text[Math.floor(Math.random() * 26)];
    let rndNum = Math.floor(Math.random() * 10);
    let rndText = rndLetter1 + rndLetter2 + String(rndNum);
    document.getElementById("text").innerText = rndText;
}


// フォームの値をクリアして、オートフォーカスする
function clearText() {
    let form = document.getElementById("input");
    form.value = '';
    form.focus();
}


// フォームの次の項目に自動でフォーカスする
function setNextFocus(obj) {
    if (obj.value.length >= obj.maxLength) {
        let es = document.fm1.elements;
        for (let i = 0; i < es.length; i++) {
            if (es[i] == obj) {
                es[i + 1].focus();
                break;
            }
        }
    }
}

let qNum = 0;
let cNum = 0;

// フォームに入力した値が正しいか判定して次の問題を出題する
function check() {
    let answer = document.getElementById("text").innerText;
    let input = document.getElementById('input').value;

    qNum++;
    document.getElementById("q-num").innerText = qNum;


    if (input == answer) {
        console.log('正解');
        clearText();
        getRndText();
        cNum++;
        document.getElementById("c-num").innerText = cNum;
    }
    else {
        console.log('不正解');
        clearText();
        getRndText();
    }
}