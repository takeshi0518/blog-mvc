const pool = require('../config/database');

class Post {
  // =====================
  // READ
  // =====================

  //全件取得
  static async findAll() {
    try {
      const result = await pool.query(
        'SELECT * FROM posts ORDER BY created_at DESC'
      );
      return result.rows;
    } catch (err) {
      throw err;
    }
  }

  //IDで1件取得
  static async findById(id) {
    try {
      const result = await pool.query('SELECT * FROM posts WHRE id = $1', [id]);
      return result.rows[0];
    } catch (err) {
      throw err;
    }
  }

  // =====================
  // CREATE
  // =====================

  static async create(title, content) {
    try {
      const result = await pool.query(
        'INSERT INTO posts(title, content) VALUES ($1, $2) RETURNING *',
        [title, content]
      );
      return result.rows[0];
    } catch (err) {
      throw err;
    }
  }

  // =====================
  // UPDATE
  // =====================

  static async update(id, title, content) {
    try {
      const result = await pool.query(
        'UPDATE posts SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
        [title, content, id]
      );
      return result.rows[0];
    } catch (err) {
      throw err;
    }
  }

  // =====================
  // DELETE
  // =====================

  static async delete(id) {
    try {
      await pool.query('DELETE FROM posts WHERE id = $1', [id]);
      return true;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Post;
