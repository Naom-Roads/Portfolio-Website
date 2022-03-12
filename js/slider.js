(function () {
    const $slides = document.querySelectorAll('.slide');
    const $controls = document.querySelectorAll('.slider__control');
    const numOfSlides = $slides.length;
    const slidingAT = 1300; // sync this with scss variable
    let slidingBlocked = false;

    [].slice.call($slides).forEach(function ($el, index) {
        const i = index + 1;
        $el.classList.add('slide-' + i);
        $el.dataset.slide = i;
    });

    [].slice.call($controls).forEach(function ($el) {
        $el.addEventListener('click', controlClickHandler);
    });

    function controlClickHandler() {
        if (slidingBlocked) return;
        slidingBlocked = true;

        const $control = this;
        const isRight = $control.classList.contains('m--right');
        const $curActive = document.querySelector('.slide.s--active');
        let index = +$curActive.dataset.slide;
        (isRight) ? index++ : index--;
        if (index < 1) index = numOfSlides;
        if (index > numOfSlides) index = 1;
        const $newActive = document.querySelector('.slide-' + index);

        $control.classList.add('a--rotation');
        $curActive.classList.remove('s--active', 's--active-prev');
        document.querySelector('.slide.s--prev').classList.remove('s--prev');

        $newActive.classList.add('s--active');
        if (!isRight) $newActive.classList.add('s--active-prev');


        let prevIndex = index - 1;
        if (prevIndex < 1) prevIndex = numOfSlides;

        document.querySelector('.slide-' + prevIndex).classList.add('s--prev');

        setTimeout(function () {
            $control.classList.remove('a--rotation');
            slidingBlocked = false;
        }, slidingAT * 0.75);
    }
})();