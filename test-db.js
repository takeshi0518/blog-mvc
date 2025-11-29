const pool = require('./config/database');

async function testConnection() {
  try {
    const result = await pool.query('SELECT * FROM posts');
    console.log('接続成功');
    console.log('投稿数', result.rows.length);
    console.log('投稿一覧');
    result.rows.forEach((post) => {
      console.log(`- ${post.title}`);
    });
    process.exit(0);
  } catch (err) {
    console.error('接続エラー', err);
    process.exit(1);
  }
}

// testConnection();
