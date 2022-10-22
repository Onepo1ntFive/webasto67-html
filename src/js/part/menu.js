(function () {
    //top menu
    let $menutopList,
        $menutopListWrap,
        $menutopListParent,
        menutopListHeight,
        menutopListParent,
        windowWidth;

    let hasChilds = document.querySelectorAll('.js-menutop-haschild');
    Array.prototype.forEach.call(hasChilds, function (hasChild, i) {
        hasChild.addEventListener('mouseenter', (event) => {
            let windowWidth = window.innerWidth;

            if (windowWidth >= 768) {
                let thisChild = event.target;

                $menutopListWrap = thisChild.parentNode.parentNode;
                $menutopListParent = thisChild.parentNode;
                $menutopList = thisChild.querySelector('.js-menutop-child');

                menutopListParent = $menutopListParent.offsetHeight;
                menutopListHeight = $menutopList.offsetHeight;

                if (menutopListParent > menutopListHeight) {
                    $menutopListWrap.style.height = menutopListParent + 30 + 'px';
                } else {
                    $menutopListWrap.style.height = menutopListHeight + 30 + 'px';
                }

                $menutopListWrap.classList.add("full");
            }
        });

        hasChild.addEventListener('mouseleave', (event) => {
            let windowWidth = window.innerWidth;
            if (windowWidth >= 768) {
                let thisChild = event.target;

                $menutopListWrap = thisChild.parentNode.parentNode;
                $menutopListWrap.style.height = 'auto';

                $menutopListWrap.classList.remove("full");
            }
        });
    });

    if (document.querySelector('.js-menu')) {
        const menuBlocks = document.querySelectorAll('.js-menu');
        Array.prototype.forEach.call(menuBlocks, function (menuBlock, i) {
            let menuOpen = menuBlock.querySelector('.js-menu-open');
            if (menuOpen) {
                menuOpen.addEventListener('click', () => {
                    if (menuBlock.classList.contains('active')) {
                        menuBlock.classList.remove('active');
                    } else {
                        menuBlock.classList.add('active');
                    }
                });
            }
        });
    }

})();

