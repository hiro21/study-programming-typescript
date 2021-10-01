// あるものがoptionとして設定できるという例
let moreObjectTest: {
    b: number,
    c?: string,
    [key: number]: boolean // こういうのもあるんだ!※
}

// オブジェクトを割り当ててみる
moreObjectTest = {b: 1}
moreObjectTest = {b: 1, c: undefined}
moreObjectTest = {b: 1, c: 'd'}
moreObjectTest = {b: 1, 10: true}
moreObjectTest = {b: 1, 10: true, 20: false}
// 以下はエラーになる。(bはかならず定義しないとだめ)
// moreObjectTest = {10: true}

// 以下はエラーになる。
// moreObjectTest = {b: 1, 33: 'red'}

// オプションは?だけではない
// readonlyを使いフィールドを読み取り専用に指定することができる。
// 初期値を割り当てたあとでそのフィールドを変更できないことを宣言できる
let moreObjectUser: {
    readonly firstName: string
} = {
    firstName: 'abby'
}

console.log(moreObjectUser.firstName)

// 以下のように変更することはできない
// moreObjectUser.firstName = 'mod abby'

// 空のオブジェクト型がある
// ただこれはできるだけ避けること
let moreObjectEmpty: {}
moreObjectEmpty = {}
moreObjectEmpty = {x: 1}