// models/post.js

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://user:password@localhost/mydatabase',
});

class Post {
  static async find() {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM posts');
      const posts = result.rows;
      return posts;
    } finally {
      client.release();
    }
  }

  static async findById(id) {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM posts WHERE id = $1', [id]);
      const post = result.rows[0];
      return post;
    } finally {
      client.release();
    }
  }
}

module.exports = Post;