(function () {

    let activeSlideIndex = 0;

    const galleryTop = new Swiper('.swiper-container--gallery', {
        spaceBetween: 30,
        loop: true,
        loopedSlides: 10,
        slidesPerView: 1,
        on: {
            activeIndexChange: () => {
                if (!!galleryTop) {
                    activeSlideIndex = galleryTop.realIndex
                    setActiveClassBySLide(activeSlideIndex);
                }
            },
        },
    });

    function setActiveClassBySLide(index) {
        let items = document.querySelectorAll('.js-gallery-nav-item');
        Array.prototype.forEach.call(items, (item) => {
            if (+item.dataset.slide === activeSlideIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        })
    }
    setActiveClassBySLide(activeSlideIndex);

    const galleryNavItems = document.querySelectorAll('.js-gallery-nav-item');
    Array.prototype.forEach.call(galleryNavItems, (galleryNavItem) => {
        galleryNavItem.addEventListener('click', (event) => {
            activeSlideIndex = event.target.dataset.slide;
            galleryTop.slideTo(activeSlideIndex)
        })

    })

    const lightbox = new FsLightbox();
    document.querySelector('body').addEventListener('click', (event) => {
        if (event.target.classList.contains('js-video')) {
            event.preventDefault();
            let source = event.target.href;
            lightbox.props.sources = [source];
            lightbox.open();
        }
    })
})();