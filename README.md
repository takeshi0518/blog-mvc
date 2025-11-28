# Blog MVC - Express + PostgreSQL

Express + PostgreSQL + MVC パターンで実装したシンプルなブログアプリケーション

## 📝 学習目的

このプロジェクトは**React の恩恵を深く理解する**ために作成しました。

### なぜ MVC パターンを学ぶのか？

現代のフロントエンド開発では React が主流ですが、**React がなぜ生まれたのか**、**何を解決したのか**を理解するには、従来の MVC パターンを実際に体験することが重要だと考えました。

MVC パターンの課題を体験することで、以下を理解できます：

- ファイルが役割ごとに分散する不便さ
- ページ遷移で状態がリセットされる問題
- jQuery による「後付け JavaScript」の限界
- コンポーネントの再利用の難しさ
- React のコンポーネント指向の利点

---

## 技術スタック

### バックエンド

- **Node.js** - JavaScript ランタイム
- **Express** - Web フレームワーク
- **PostgreSQL** - リレーショナルデータベース
- **EJS** - テンプレートエンジン

### インフラ

- **Docker** - コンテナ化
- **docker-compose** - 開発環境構築

### フロントエンド

- **jQuery** - DOM 操作（後付け JavaScript）
- **Vanilla CSS** - スタイリング

---

## 📁 プロジェクト構造（MVC パターン）

```
blog-mvc/
├── models/                    # Model - データ層
│   └── Post.js               # 記事データの操作
├── controllers/               # Controller - ロジック層
│   └── postsController.js    # 記事のビジネスロジック
├── views/                     # View - 表示層
│   ├── layout.ejs            # 共通レイアウト
│   └── posts/                # 記事関連のView
│       ├── index.ejs         # 一覧
│       ├── show.ejs          # 詳細
│       ├── new.ejs           # 新規作成
│       └── edit.ejs          # 編集
├── routes/                    # ルーティング
│   └── posts.js
├── config/                    # 設定
│   └── database.js           # DB接続設定
├── public/                    # 静的ファイル
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js            # jQuery（後付け）
├── docker-compose.yml         # Docker設定
└── app.js                     # アプリ起動
```

**特徴：役割ごとにファイルが分かれている**

---

## 🔧 セットアップ

### 前提条件

- Node.js 18 以上
- Docker & Docker Compose

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/takeshi0518/blog-mvc.git
cd blog-mvc

# 依存パッケージをインストール
npm install

# Dockerでデータベースを起動
docker-compose up -d

# アプリケーションを起動
node app.js
```

ブラウザで http://localhost:3000 にアクセス

---

## 機能

- 記事一覧表示
- 記事詳細表示
- 記事作成（バリデーション付き）
- 記事編集
- 記事削除（確認ダイアログ付き）
- PostgreSQL によるデータ永続化

---

## MVC パターンの課題

このプロジェクトを通じて、以下の課題を実感できます：

### 1. ファイルの分散

```
記事一覧機能を修正するには：
- models/Post.js      ← データ取得ロジック
- controllers/postsController.js  ← ビジネスロジック
- views/posts/index.ejs  ← 表示

3つのファイルを開く必要がある
```

### 2. 状態の保持が困難

```javascript
// ページ遷移するたびに状態がリセット
GET /posts → 一覧表示
GET /posts/1 → 詳細表示（状態消失）
戻る → また一覧を取得（状態リセット）
```

### 3. jQuery による「後付け JavaScript」

```javascript
// public/js/app.js
// HTMLが読み込まれた後に実行
$('.delete-btn').on('click', function (e) {
  if (!confirm('本当に削除しますか？')) {
    e.preventDefault();
  }
});

// HTMLとJavaScriptが分離している
// クラス名で紐付け（脆い）
```

### 4. コンポーネントの再利用が難しい

```html
<!-- views/posts/index.ejs -->
<div class="post-card">
  <h2><%= post.title %></h2>
  <p><%= post.content %></p>
</div>

<!-- 別のページでも同じHTMLが必要なら... -->
<!-- → コピペするしかない -->
```

---

## 🤔 なぜ古い技術を学ぶのか？

> 「新しい技術を理解するには、古い技術を知る必要がある」

MVC パターンは「古い」技術ではなく、**今も現役**の設計パターンです：

- Ruby on Rails
- Laravel
- Django
- ASP.NET MVC

しかし、フロントエンド開発においては**React のコンポーネント指向が主流**になりました。

その理由を理解するには、MVC パターンの課題を体験することが最も効果的だと考えています。
