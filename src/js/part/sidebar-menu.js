(function () {

    let windowWidth = window.innerWidth

    function setHeight(el, val) {
        if (typeof val === "function") val = val();
        if (typeof val === "string") el.style.height = val;
        else el.style.height = val + "px";
    }

    const mainLevel = document.querySelector('.js-menu-main');
    const menuAchors = document.querySelectorAll('.js-menu-item ins');
    const menuAchors2 = document.querySelectorAll('.js-menu-item-2 ins');
    const secondLevel = document.querySelectorAll('.js-menu-next');
    const thirdLevel = document.querySelectorAll('.js-menu-next-2');
    const backBtn = document.querySelector('.js-menu-back');
    let nextLevel = null;
    let mainLevelHeight = mainLevel.offsetHeight;
    let nextLevelHeight = null;
    let prevLevelHeight = null;

    setHeight(mainLevel, mainLevelHeight);

    Array.prototype.forEach.call(menuAchors, function (el, i) {
        el.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (event.target.parentNode.parentNode.classList.contains('js-menu-item')) {
                nextLevel = event.target.parentNode.nextElementSibling;

                secondLevel.forEach(function (item, i) {
                    item.classList.remove('active');
                });

                nextLevel.classList.add('active');
                mainLevel.classList.add('active');

                backBtn.classList.add('active');

                nextLevelHeight = nextLevel.offsetHeight;
                prevLevelHeight = nextLevelHeight;

                setHeight(mainLevel, nextLevelHeight);
            }

        });
    });


    Array.prototype.forEach.call(menuAchors2, function (el, i) {
        el.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (event.target.parentNode.parentNode.classList.contains('js-menu-item-2')) {
                nextLevel = event.target.parentNode.nextElementSibling;

                thirdLevel.forEach(function (item, i) {
                    item.classList.remove('active');
                });

                nextLevel.classList.add('active');
                mainLevel.classList.add('active-2');

                backBtn.innerHTML = `Назад в ${event.target.parentNode.parentNode.parentNode.querySelector('.sidebar__menu-item-spacer a').innerHTML}`;

                nextLevelHeight = nextLevel.offsetHeight;

                setHeight(mainLevel, nextLevelHeight);
            }
        });
    });

    backBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (mainLevel.classList.contains('active-2') && mainLevel.classList.contains('active')) {
            backBtn.innerHTML = 'Назад в меню';
            mainLevel.classList.remove('active-2');
            thirdLevel.forEach(function (item, i) {
                item.classList.remove('active');
            });
            setHeight(mainLevel, prevLevelHeight);
        } else if (mainLevel.classList.contains('active')) {
            mainLevel.classList.remove('active');
            secondLevel.forEach(function (item, i) {
                item.classList.remove('active');
            });
            setHeight(mainLevel, mainLevelHeight);
            backBtn.innerHTML = 'Назад в меню';
            backBtn.classList.remove('active');
        }

      
    });

    const showSidebarBtns = document.querySelectorAll('.js-sidebar-show');
    const hideSidebarBtns = document.querySelectorAll('.js-sidebar-hide');
    const body = document.querySelector('body');
    let clickedEl = null;

    Array.prototype.forEach.call(showSidebarBtns, function (el, i) {
        el.addEventListener('click', (event) => {
            event.preventDefault();
            if (el.classList.contains('active')) {
                hideSidebar();
            } else {
                clickedEl = el;
                showSidebar();
            }
        });
    });
    Array.prototype.forEach.call(hideSidebarBtns, function (el, i) {
        el.addEventListener('click', (event) => {
            event.preventDefault();
            hideSidebar();
        });
    });

    const sidebar = document.querySelector('.js-sidebar');
    const header = document.querySelector('.header');

    function showSidebar() {
        windowWidth = window.innerWidth
        if (windowWidth < 1200) {
            sidebar.style.top = header.getBoundingClientRect().height + 'px';
            sidebar.classList.add('active');
            clickedEl.classList.add('active');
            body.classList.add('ov-h')
        }
    }
    function hideSidebar() {
        sidebar.classList.remove('active');
        clickedEl.classList.remove('active');
        body.classList.remove('ov-h');

        mainLevel.classList.remove('active');
        mainLevel.classList.remove('active-2');
        secondLevel.forEach(function (item, i) {
            item.classList.remove('active');
        });
        thirdLevel.forEach(function (item, i) {
            item.classList.remove('active');
        });
        setHeight(mainLevel, mainLevelHeight);
        backBtn.innerHTML = 'Назад в меню';
        backBtn.classList.remove('active');
    }

    if (document.querySelector('.js-menu-collapse')) {
        let menuCollapseBtns = document.querySelectorAll('.js-menu-collapse ins');
        let menuCollapseContent = null;

        Array.prototype.forEach.call(menuCollapseBtns, function (menuCollapseBtn, i) {
            menuCollapseContent = menuCollapseBtn.parentNode.parentNode.querySelector('.js-menu-collapse-item')
            console.log(menuCollapseContent)
            menuCollapseBtn.addEventListener('click', () => {
                menuCollapseBtn.parentNode.parentNode.classList.toggle('active')
                slideToggle(menuCollapseContent);
            })
        });
    }

})();