$(function () {

    $('.page-header').each(function () {

        var $window = $(window),
            $header = $(this),

            // ヘッダーのクローン
            $headerClone = $header.contents().clone(),

            // ヘッダーのクローンのコンテナ
            $headerCloneContainer = $('<div class="page-header-clone"></div>'),

            // 高さ調整
            threshold = 423;

        // クローンを挿入
        $headerCloneContainer.append($headerClone);

        // コンテナーを body の最後に挿入
        $headerCloneContainer.appendTo('body');

        // スクロール時に処理を実行するが、回数を 1 秒間あたり 15 までに制限
        $window.on('scroll', $.throttle(1000 / 15, function () {
            if ($window.scrollTop() > threshold) {
                $headerCloneContainer.addClass('visible');
            }
            else {
                $headerCloneContainer.removeClass('visible');
            }
        }));

        // スクロールイベントを発生させ、初期位置を決定
        $window.trigger('scroll');
    });

});
