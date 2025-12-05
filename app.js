const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();

const app = express();

// =====================
//  ビューエンジン設定
// =====================

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// =====================
//  レイアウト対応
// =====================

app.use(expressLayouts);
app.set('layout', 'layout');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

// =====================
//  ミドルウェア
// =====================

//body-parser(フォームデータを解析)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//method-override (PUT, DELETEメソッドを使えるようにする)
app.use(methodOverride('_method'));

// 静的ファイル（CSS, JS, 画像など）
app.use(express.static(path.join(__dirname, 'public')));

// =====================
//  ルーティング
// =====================

const postsRoutes = require('./routes/posts');
app.use('/posts', postsRoutes);

//トップページ
app.get('/', (req, res) => {
  res.redirect('/posts');
});

// =====================
//  404エラー
// =====================
app.use((req, res) => {
  res.status(404).send('ページが見つかりません');
});

// =====================
//  サーバー起動
// =====================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
