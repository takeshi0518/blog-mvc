const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// =====================
// GET
// =====================

//一覧表示
//GET /posts
router.get('/', postsController.index);

//新規作成フォーム
//GET /posts/new
router.get('/new', postsController.new);

//詳細表示
//GET /posts/:id
router.get('/:id', postsController.show);

//編集フォーム表示
//GET /posts/:id/edit
router.get('/:id/edit', postsController.edit);

// =====================
// POST/PUT/DELETE
// =====================

//新規作成
//POST /posts
router.post('/', postsController.create);

//更新処理
//PUT /posts/:id
router.put('/:id', postsController.update);

//削除
//DELETE /posts/:id
router.delete('/:id', postsController.destroy);

module.exports = router;
