(function () {

    //range
    if (document.querySelector('.js-range')) {
        let slidersSelector = document.querySelectorAll('.js-range');
        Array.prototype.forEach.call(slidersSelector, function (sliderSelector) {

            let sliderSlider = sliderSelector.querySelector('.js-range-slider');
            let sliderSliderMinInput = sliderSelector.querySelector('.js-range-min');
            let sliderSliderMsxInput = sliderSelector.querySelector('.js-range-max');

            noUiSlider.create(sliderSlider, {
                start: [15000, 55999],
                step: 100,
                connect: true,
                format: wNumb({
                    decimals: 0,
                }),
                range: {
                    'min': [0],
                    'max': [100000]
                }
            });

            const snapValues = [
                sliderSliderMinInput,
                sliderSliderMsxInput
            ];
            sliderSlider.noUiSlider.on('update', function (values, handle) {
                snapValues[handle].value = values[handle];
            });

            sliderSliderMinInput.addEventListener('change', function () {
                sliderSlider.noUiSlider.set([this.value, null]);
            });
            sliderSliderMsxInput.addEventListener('change', function () {
                sliderSlider.noUiSlider.set([null, this.value]);
            });
        });
    }

    // collapse
    let collapseTitle = document.querySelectorAll('.js-collapse-title');
    Array.prototype.forEach.call(collapseTitle, function (el, i) {
        let collapseContent = el.nextElementSibling;
        el.addEventListener('click', () => {
            el.classList.toggle('inactive');
            slideToggle(collapseContent, 300)
        });

    });

    //show filter
    if (document.querySelector('.js-filter')) {
        const bodyBlock = document.querySelector('body');
        const filterBtnShow = document.querySelector('.js-filter-show');
        const filterDesktopBtnHide = document.querySelectorAll('.js-filter-desktop-close');
        const filterBtnHide = document.querySelectorAll('.js-filter-close');
        const filterBg = document.querySelector('.js-filter-bg');
        const filterBlock = document.querySelector('.js-filter-block');
        const filterDesktopBlock = document.querySelector('.js-filter-desktop');

        // hide desktop
        Array.prototype.forEach.call(filterDesktopBtnHide, function (el, i) {
            el.addEventListener('click', () => {
                bodyBlock.classList.remove('ov-h');
                filterBg.classList.remove('active');
                filterDesktopBlock.classList.remove('active');
                filterBlock.classList.remove('active');
            })
        });

        // show
        filterBtnShow.addEventListener('click', () => {
            bodyBlock.classList.add('ov-h');
            filterBg.classList.add('active');
            filterBlock.classList.add('active');
        })
        // hide
        Array.prototype.forEach.call(filterBtnHide, function (el, i) {
            el.addEventListener('click', () => {
                bodyBlock.classList.remove('ov-h');
                filterBg.classList.remove('active');
                filterDesktopBlock.classList.remove('active');
                filterBlock.classList.remove('active');
            })
        });
    }

    // sticky filter
    if (document.querySelector('.js-filter-wrap')) {
        function fixFilter() {
            const filterFixWrap = document.querySelector('.js-filter-wrap');
            const filterFixInner = document.querySelector('.js-filter-wrap-inner');
            let filterFixWrapTop = filterFixWrap.getBoundingClientRect().top + window.pageYOffset;
            let windowScrollTop = window.pageYOffset;

            if (filterFixWrapTop <= windowScrollTop) {
                filterFixWrap.classList.add('active');
            } else {
                filterFixWrap.classList.remove('active');
            }
        }

        fixFilter()
        window.addEventListener('scroll', fixFilter);
    }
})();