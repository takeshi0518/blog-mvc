const Post = require('../models/Post');

// =====================
// 一覧表示
// =====================

exports.index = async (req, res) => {
  try {
    const posts = await Post.findAll();

    //Viewに渡す
    res.render('posts/index', {
      title: '記事一覧',
      posts: posts,
    });
  } catch (err) {
    console.err(err);
    res.send(500).send('サーバーエラーが発生しました');
  }
};

// =====================
// 詳細表示
// =====================

exports.show = async (req, res) => {
  try {
    const id = req.prams.id;

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).send('記事が見つかりません');
    }

    res.render('posts/show', {
      title: post.title,
      post: post,
    });
  } catch (err) {
    console.err(err);
    res.status(500).send('サーバーエラーが発生しました');
  }
};

// =====================
// 新規作成フォーム表示
// =====================
exports.new = (req, res) => {
  res.render('posts/new', {
    title: '新規記事作成',
    post: { title: '', content: '' }, //空のpostオブジェクト
    errors: [], //エラーメッセージ用
  });
};

// =====================
//  編集フォーム表示
// =====================

exports.edit = async (req, res) => {
  try {
    const id = req.prams.id;

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).send('記事が見つかりません');
    }

    res.render('posts/edit', {
      title: '記事編集',
      post: post,
      errors: [],
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('サーバーエラーが発生しました');
  }
};
