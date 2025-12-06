$(document).ready(function () {
  console.log('jQuery読み込み完了');
});

// ========================
// 削除確認ダイアログ
// ========================

$('.delete-btn').on('click', function (e) {
  if (!confirm('本当に削除しますか？')) {
    e.preventDefault();
    return false;
  }
});

// ========================
// フォームバリデーション
// ========================

$('.post-form').on('submit', function (e) {
  const title = $('#title').val().trim();
  const content = $('#content').val().trim();

  // 空欄チェック
  if (title === '' || content === '') {
    alert('タイトルと本文を入力してください');
    e.preventDefault();
    return false;
  }

  // タイトルの長さチェック
  if (title.length > 255) {
    alert('タイトルは255文字以内で入力してください');
    e.preventDefault();
    return false;
  }
});
