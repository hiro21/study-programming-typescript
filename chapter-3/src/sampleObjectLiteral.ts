let objectLiteral1: {
    firstName: String,
    lastName: String
} = {
    firstName: 'john',
    lastName: 'barrowman'
}

class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ) {}
}
objectLiteral1 = new Person('taro', 'test')
console.log(objectLiteral1)

// 定義したオブジェクトを使わないとどうなるか？
let objectLiteralError: {b: number}
// 以下のエラーがでる
//  型 '{}' にプロパティ 'b' がありません。
// objectLiteralError = {}


// 余分に定義すると、以下のようなエラー
// オブジェクト リテラルは既知のプロパティのみ指定できます。'c' は型 '{ b: number; }' に存在しません。
//objectLiteralError = {
//    b: 1,
//    c: 2
//}