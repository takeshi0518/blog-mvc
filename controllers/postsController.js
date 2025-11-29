const Post = require('../models/Post');

// ==================
// 一覧表示
// ==================

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


