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
