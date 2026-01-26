# Blog MVC - Express + PostgreSQL

Express + PostgreSQL + MVC パターンで実装したシンプルなブログアプリケーション

## 学習目的

このプロジェクトは**Next.js の恩恵を深く理解する**ために作成しました。

### なぜ MVC パターンを学ぶのか？

現代のフロントエンド開発では Next.js や React が主流ですが、**Next.js がなぜ生まれたのか**、**何を解決したのか**を理解するには、従来の MVC パターンを実際に体験することが重要だと考えました。

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

## セットアップ

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

## 機能

- 記事一覧表示
- 記事詳細表示
- 記事作成（バリデーション付き）
- 記事編集
- 記事削除（確認ダイアログ付き）
- PostgreSQL によるデータ永続化
