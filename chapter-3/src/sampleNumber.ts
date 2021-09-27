// 値がnumberであることを推論させる
let number1 = 1234
var number2 = Infinity * 0.10
// 値が特定のnumberであることを推論させる
const number3 = 5678
let compareNumber1AndNumber2 = number1 < number2
// 値がnumberであることを明示的する
let number4: Number = 100
// 値が特定のnumberであることを明示的にする
let number5: 26.218 = 26.218
// これはエラーになる
// let number6: 26.218 = 10

console.log(number1)
console.log(number2)

// 数字の区切りを使う宣言方法
let oneMillion = 1_000_000
let twoMillion = 2_000_000
console.log(oneMillion) // 1000000と出力される
console.log(twoMillion) // 2000000と出力される