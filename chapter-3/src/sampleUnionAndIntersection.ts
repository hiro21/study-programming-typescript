type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
// これでCat or Dog or Cat＆Dog両方の性質を持つtypeになる。
type CatOrDogOrBoth = Cat | Dog
// これでCat & Dog両方のプロパティを持つものができる。
// ここでいうとCatにあるname,purrs、Dogにあるbarks、wagsを持つものができる
type CatAndDog = Cat & Dog

// catを設定してみる
let testCatOrDogOrBoth: CatOrDogOrBoth = {
    name: 'tom',
    purrs: true
}

// Dogを設定してみる
testCatOrDogOrBoth = {
    name: 'dogdog',
    barks: true,
    wags: true
}

let testCatAndDog: CatAndDog = {
    name: 'dogAndCat',
    purrs: true,
    barks: true,
    wags: true
}

// 合併の例
// 'true'というstringか、nullを返す
function trueOrNull(isTrue: boolean) {
    if (isTrue) {
        return 'true'
    }
    return null
}

// 上記を型で表現
type Returns = string | null
