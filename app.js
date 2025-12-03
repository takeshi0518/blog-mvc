const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
require('dotenv').config();

const app = express();

// =====================
//  ビューエンジン設定
// =====================

app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'views'));

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
//  レイアウト対応
// =====================

app.use((req, res, next) => {
  const render = res.render;
  res.render = function (view, options) {
    options = options || {};
    options.body = '';

    render.call(this, view, options, (err, html) => {
      if (err) return next(err);

      options.body = html;
      render.call(res, 'layout', options);
    });
  };
  next();
});

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
