# chapter2で行ったこと

## セットアップ
あらかたのことを書いていく
### npmプロジェクトの初期化
本ディレクトリで以下を実行
```
npm init
```

### TSC、TSLint、Node.js用の型宣言のinstall
```
npm install --save-dev typescript tslint @types/node
```
### tsconfig.json
Typescriptプロジェクトのルートに配置するファイル。これは必ず配置するもの。
#### tsconfig.jsonにかかれていること
以下のようなことを定義するものである。
* どのファイルをコンパイルするか
* コンパイル結果をどのディレクトリに格納するか
* どのバージョンのJavaScriptを出力するか

#### tsconfig.jsonのオプション
以下のようなオプションがある。

|オプション|説明|
|--------|----|
|include|TSCがTypeScriptファイルを見るけるためにどのフォルダを探すべきか？|
|lib|TODO|
|module|TODO|
|outDir|生成するJavaScriptファイルのコードをTSCがどのフォルダに格納するか？|
|strict|コードをチェックするときにできるだけ厳格にチェックする。これは必須でやったほうが良さそうである|
|target|TSCがどのJavaScriptバージョンにコンパイルするか？|

上記以外にもオプションがあり、公式の以下を参照すること。
https://www.typescriptlang.org/docs/handbook/compiler-options.html

##### tsconfig.jsonを生成する方法
以下のコマンドで雛形を作成することが可能である。
```
npx tsc --init
```

### tslint.json（非推奨なのでこれは使わない）
Typescript用のlintの設定であるが2019年に非推奨になった。
代替方法としてJavaScript用のlintである、ESLintをTypeScript用のプラグインとともに使う方法があるようである。
ここではその方法を使う。

### ESLint
lintとしてESLintを、TypeScript用のプラグインを使うことでTypeScriptのリンターとして使えるようになる。
※ESLintはJavaScript用のリンターである。

#### 設定方法
##### 必要なパッケージのインストール
以下のコマンドでインストールする。
```
npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```
上記でインストールしているものは以下の役割がある。
|パッケージ名|役割|
|----------|----|
|eslint|ESLintのパッケージ|
|@typescript-eslint/eslint-plugin|EsLintのTypeScript用プラグイン|
|@typescript-eslint/parser|TypeScriptをESLintが理解できるようにパースする|

## 実装
ここから実際にコードを書いていく

### index.ts

#### 配置場所
以下にindex.tsを配置する

`src/index.ts`

#### 実装内容
今回はhelloする内容とするので以下を書くのみ。
```
console.log("Hello!")
```

#### コンパイル
TSCでコンパイルする
```
./node_modules/.bin/tsc
```

#### コードの実行
Node.jsを使ってコードを実行する。
```
node ./dist/index.js
```
##### 実行結果
コンソールに以下が表示されればOK。
```
Hello!
```

## コンパイル〜コード実行の効率化
ここでは自分でTSCを使ってコンパイルし、実行していた。
このコンパイルと実行を1つのコマンドで使う方法があるので次回以降はこの方法を使う。
※ts-nodeを使う