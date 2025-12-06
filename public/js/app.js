$(document).ready(function () {
  console.log('jQuery読み込み完了');
});

$('.delete-btn').on('click', function (e) {
  if (!confirm('本当に削除しますか？')) {
    e.preventDefault();
    return false;
  }
});


