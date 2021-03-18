$(function(){
    $(window).on('scroll', function () {
        if ($('#home').offset().top + $('#home').height() - 500 < $(window).scrollTop()) {
            $('#home').css('background-color', 'rgba(254, 192, 203, 0.8)');
        } else {
            $('#home').css('background-color', 'rgb(78, 84, 200)');
        }
        if ($('#about').offset().top + $('#about').height() - 500 < $(window).scrollTop()) {
            $('#about').css('background-color', 'rgb(251, 207, 98)');
        } else {
            $('#about').css('background-color', 'rgba(254, 192, 203, 0.8)');
        }
        if ($('#skills').offset().top + $('#skills').height() - 500 < $(window).scrollTop()) {
            $('#skills').css('background-color', 'rgb(239, 237, 237)');
        } else {
            $('#skills').css('background-color', 'rgb(251, 207, 98)');
        }
        if ($('#service').offset().top + $('#service').height() - 500 < $(window).scrollTop()) {
            $('#service').css('background-color', 'rgb(111 211 252 / 0.61)');
        } else {
            $('#service').css('background-color', 'rgb(239, 237, 237)');
        }
        if ($('#work').offset().top + $('#work').height() - 500 < $(window).scrollTop()) {
            $('#work').css('background-color', 'rgb(78,245,207)');
        } else {
            $('#work').css('background-color', 'rgb(111 211 252 / 0.61)');
        }
        if ($('#contact').offset().top + $('#contact').height()- 500 < $(window).scrollTop()) {
            $('#contact').css('background-color', 'rgb(130,213,251)');
        } else {
            $('#contact').css('background-color', 'rgb(78,245,207)');
        }
    });
    // var $win = $(window);
    // $win.on('load resize', function() {
        var windowWidth = window.innerWidth;
        if (windowWidth < 730) {
            $('.burger-btn, #header-list li a').on('click',function(){//.btn_triggerをクリックすると
                    $('.burger-btn').toggleClass('close');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
                    $('#header').fadeToggle(500);//.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
                    $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
                
            });
        }
    // });
    $('#header-list li a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
            'scrollTop': position
        }, 500);
    });
    
    $(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 400){
              $(this).addClass('scrollin');
            }
        });
    });
    
});
