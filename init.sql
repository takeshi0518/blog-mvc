CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO posts (title, content) VALUES
  ('はじめての投稿', 'これは最初の投稿です。Express + PostgreSQL + MVCで作りました。'),
  ('Reactとの違い', 'MVCパターンを実際に体験することで、Reactの利点が理解できます。'),
  ('PostgreSQLについて', 'Dockerで環境構築することで、クリーンな開発環境を維持できます。');