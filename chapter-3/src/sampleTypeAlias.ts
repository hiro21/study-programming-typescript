// type aliasの宣言
type typeAliasAge = number
type typeAliasPerson = {
    name: string
    age: typeAliasAge
}
// type aliasは明示的に型を宣言する
let age: typeAliasAge = 20
let driver: typeAliasPerson = {
    name: 'taro',
    age: age
}

// numberにも割当可能
let typeAliasAge = 22
let driver2: typeAliasPerson = {
    name: 'taro2',
    age: typeAliasAge
}
