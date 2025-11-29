const Post = require('./models/Post');

async function test() {
  //全件取得
  const posts = await Post.findAll();
  console.log('全記事:', posts.length);

  //新規作成
  const newPost = await Post.create('テスト記事', 'テスト本文');
  console.log('作成', newPost.title);

  //削除
  await Post.delete(newPost.id);
  console.log('削除完了');
}

// test();
