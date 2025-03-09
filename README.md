# README

このリポジトリは、Cursor を使って登壇資料を効率的に作成するためのテンプレートです。reveal.js をベースにしています。

## 目的

- speaker_note.md から index.html への自動変換
- reveal.js による美しいプレゼンテーション
- スピーカーノート対応
- レスポンシブデザイン

## 使い方

1. speaker_note.md にプレゼンテーションの内容を記述

   ```markdown
   # スライドのタイトル

   ## スライドページのタイトル

   コンテンツ

   ### note

   スピーカーノート
   ```

2. Cursor を agent モードにし、以下のような指示をだす

   ```
    @spekaer_note.mdを元に@index.htmlを生成してください
   ```

3. AI エディタが自動的に index.html を更新

4. reveal.js

### 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm start
```

ブラウザで `http://localhost:5173` を開くとプレゼンテーションが表示されます。

### プレゼンテーション操作方法

- スペースキーまたは矢印キー：次のスライドへ移動
- 上下矢印キー：縦方向のスライド間を移動
- ESC キー：スライドの概要を表示
- S キー：スピーカーノートを表示

## (参考)reveal.js の詳細な使い方

### テキストアニメーション

テキストにアニメーション効果を追加するには、`fragment` クラスを使用します。

```html
<p class="fragment">このテキストはアニメーションで表示されます</p>
```

### スライド切り替えアニメーション

スライド切り替え時のアニメーション効果を指定するには、`data-transition` 属性を使用します。

```html
<section data-transition="zoom">
  <h2>ズーム効果</h2>
</section>
```

### スピーカーノート

スピーカーノートを追加するには、`<aside class="notes">` タグを使用します。

```html
<section>
  <h2>スライドタイトル</h2>
  <aside class="notes">
    ここにスピーカーノートを書きます。
    これはプレゼンテーション中には表示されません。
  </aside>
</section>
```

## 参考リンク

- [reveal.js 公式ドキュメント](https://revealjs.com/)
- [reveal.js GitHub リポジトリ](https://github.com/hakimel/reveal.js/)
- [Cursor - AI First Code Editor](https://cursor.sh/)
