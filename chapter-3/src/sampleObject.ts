let objectTest1: object = {
    a: 'x'
}

// aにアクセスしようとするが以下のエラーがでる
// [ts] プロパティ 'a' は型 'object' に存在しません。
// objectTest1.a

// 型をTypeScriptに推測させる形。
// これは問題なく使える
let objectTest2 = {
    b: 'x'
}
console.log(objectTest2.b)

let objectTest3 = {
    c: {
        d: 'f'
    }
}
console.log(objectTest3)

// さらに{}の中に明示的に型を指定する方法もある。
let objectTest4: {b: number} = {
    b: 12
}
console.log(objectTest4)
