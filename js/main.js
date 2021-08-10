$(document).ready(function () {
  /* Код отвечает за анимацию скролла по внутренней части страницы при клилке на меню */
  $('.header-navigation__link[href^="#"]').click(function () {
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000
    );
    $('.header-navigation__link[href^="#"').css({ color: "#fff" });
    $(this).css({ color: "#2fa517" });
    return false;
  });

  let isScrolling = false;

  window.addEventListener("scroll", throttleScroll, false);

  function throttleScroll(e) {
    if (isScrolling == false) {
      window.requestAnimationFrame(function () {
        scrolling(block);
        isScrolling = false;
      });
    }
    isScrolling = true;
  }

  document.addEventListener("DOMContentLoaded", scrolling, false);

  let block = document.getElementById("statistics");

  function scrolling(block) {
    if (!block.classList.contains("stop-animation")) {
      if (isFullyVisible(block)) {
        /* Код отвечает за анимацию увеличения значения цыфр в блоке статистики*/
        block.classList.add("stop-animation");
        $(".js-counter").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                //chnage count up speed here
                easing: "swing",
                duration: 2000,
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
      }
    }
  }

  function isFullyVisible(el) {
    /*Функция полного отображения*/
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;

    return top >= 0 && bottom <= window.innerHeight;
  }
});
