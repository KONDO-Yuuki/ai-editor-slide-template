import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.js';
import RevealMath from 'reveal.js/plugin/math/math.js';
import RevealZoom from 'reveal.js/plugin/zoom/zoom.js';

// Revealの初期化
let deck = new Reveal({
  // 設定オプション
  width: 1200,
  height: 700,
  margin: 0.1,
  minScale: 0.2,
  maxScale: 2.0,
  // コントロールの表示
  controls: true,
  // ナビゲーションの表示
  progress: true,
  // スライド番号の表示
  slideNumber: true,
  // スライドの自動再生（ミリ秒）
  // autoSlide: 5000,
  // スライドの自動再生を一時停止
  // autoSlideStoppable: true,
  // スライドの自動再生の繰り返し
  // loop: false,
  // スライドの中央揃え
  center: true,
  // トランジションスタイル: none/fade/slide/convex/concave/zoom
  transition: 'slide',
  // トランジションスピード: default/fast/slow
  transitionSpeed: 'default',
  // 背景のトランジションスタイル: none/fade/slide/convex/concave/zoom
  backgroundTransition: 'fade',
  // プレゼンテーションのテーマ
  // beige, black, blood, league, moon, night, serif, simple, sky, solarized, white
  theme: 'black',
  // プラグインの設定
  plugins: [RevealHighlight, RevealNotes, RevealMath, RevealZoom]
});

// Revealの初期化
deck.initialize();