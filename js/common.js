//画像の置換
$(function() {
    var $setElem = $('.switch'),
        pcName = 'pc_',
        spName = 'sp_',
        replaceWidth = 767;

    $setElem.each(function() {
        var $this = $(this);

        function imgSize() {
            var windowWidth = window.innerWidth;
            if (windowWidth >= replaceWidth) {
                $this.attr('src', $this.attr('src').replace(spName, pcName)).css({ visibility: 'visible' });
            } else if (windowWidth < replaceWidth) {
                $this.attr('src', $this.attr('src').replace(pcName, spName)).css({ visibility: 'visible' });
            }
        }
        $(window).resize(function() { imgSize(); });
        imgSize();
    });
});

// スムーズスクロール
$(function() {
    $('a[href^=#]').click(function() {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

// ページトップ
$(document).ready(function() {
    var pagetop = $('.pagetop');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});

// モーダルウィンドウ
$(function() {
    $('#openModal').click(function() {
        $('#modalArea').fadeIn();
    });
    $('#closeModal , #modalBg').click(function() {
        $('#modalArea').fadeOut();
    });
});

// モーダルウィンドウ
$(function() {
    $('#openModal2').click(function() {
        $('#modalArea2').fadeIn();
    });
    $('#closeModal2 , #modalBg2').click(function() {
        $('#modalArea2').fadeOut();
    });
});