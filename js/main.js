$(document).ready(function () {
    /* Код отвечает за анимацию увеличения значения цыфр в блоке статистики*/
    $('.js-counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
          
          //chnage count up speed here
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    /* Код отвечает за анимацию скролла по внутренней части страницы при клилке на меню */
    $('.header-navigation__link[href^="#"').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
        $('.header-navigation__link[href^="#"').css({'color':'#fff'});
        $(this).css({'color':'#2fa517'});
        return false;
    });
});