# AI エディタを使って爆速でスライドを作る

## 自己紹介

twitter: @kondo_script

- 株式会社 NoSchool
- エンジニアリングマネージャ
- スパゲッティを料理すること

<!-- images/pasta.jpgを趣味の横に配置してください -->

## 今日のテーマ

AI エディタを使って爆速でスライドを作ってみた話

## 使った技術

- cursor
- bolt.new
- (reveal.js)
<!-- cursorの横にcursor.jpgを、bolt.newの横にbolt.pngを配置してください-->

### note

- cursor はご存知 AI エディタです
- bolt はプロトタイピングに特化したコード生成サービス。使わなくても良いかも
- reveal.js も一応使ってますが、特に話の本筋ではないので深く触れません。生成 AI のこと考えて一番ネット上に情報が多そうなのを npm trends 見て選びました。ちなみに私は今までずっと google slide 派でした

## やったこと

<!-- この画面は最初はタイトル以外表示せず、箇条書きはクリックするたびにアニメーションで表示するようにしてください。
最後の1行はcursorのセンスでカッコよくアニメーション付きで飛び出るように表示してください -->

- bolt.new でボイラープレートを作成
- .cursor/rules を作成
- speaker_note.md を書いて cursor に変換させる
- このスライドが完成!!!

### note

ちなみに今のアニメーションは cursor に「お前のセンスでカッコよく目立たせてくれ」と無茶振りしてます
では詳細に見ていきましょう

## bolt.new でボイラープレートを作成

以下のプロンプトでボイラープレートを作成

```
reveal.js を使ったスライド作成のテンプレートを作ってください

エンジニアが使う前提で、package.jsonに起動コマンドが書いてある
ローカルでプレゼンテーションをする用途
以下の動作サンプルを含むページがすでにある状態
画像の読み込み
文字のアニメーション
画面切り替え時のアニメーション
上記の使い方をまとめた日本語のREADME
```

### note

- 生成後に local に ダウンロードして clone しました
- 手動で書いたのは .cursor/rules だけです

## .cursor/rules を作成

<!-- speaker_note.mdcの内容をここに引用 -->

### note

こんな感じでルールを自分で考えました。
コメントを補足として扱うのが体験が良かったです。

## speaker_note.md を書いて cursor に変換させる

```speaker_note.md
# AI エディタを使って爆速でスライドを作る

## 自己紹介

twitter: @kondo_script

- 株式会社 NoSchool
- エンジニアリングマネージャ
- スパゲッティを料理すること

<!-- images/pasta.jpgを趣味の横に配置してください -->

```

```HTML
    <title>AI エディタを使って爆速でスライドを作る</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="reveal">
      <div class="slides">
        <!-- タイトルスライド -->
        <section>
          <h1>AI エディタを使って爆速でスライドを作る</h1>
        </section>

        <!-- 自己紹介 -->
        <section>
          <h2>自己紹介</h2>
          <div class="two-column">
            <div>
              <ul>
                <li>twitter: @kondo_script</li>
                <li>所属：株式会社 NoSchool</li>
                <li>職業：エンジニアリングマネージャ</li>
                <li>趣味：スパゲッティを料理すること</li>
              </ul>
            </div>
            <div>
```

## まとめ

- AI コーディングは新時代のメタプログラミング
- エンジニアが使うツールとの相性が抜群

### note

というか今回の感想です

- AI コーディングはメタプログラミング
  - 適切な抽象化をして指示を出せば出すほど AI の恩恵を受けられる
  - 今回 cursor/rules と speaker_note は自作したが、これも ChatGPT なりなんなり書かせてもよかったもよかった
- エンジニア向けのツールと相性抜群
  - 解釈を伝えやすい
  - アウトプットの微妙なズレの微調整はこちらで巻き取れる。HTML が壊れた話

## おまけ

<!-- 最後のページなので何かしらの装飾を入れてください -->

この speaker_note を食わせてそのまま zenn の記事を書く予定です。お楽しみに。
