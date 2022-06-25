(function () {

    if (document.querySelectorAll('.js-count-input').length) {
        const countInputs = document.querySelectorAll('.js-count-input');
        Array.prototype.forEach.call(countInputs, function (el) {
            let input = el;
            let minusBtn = el.parentNode.previousElementSibling;
            let plusBtn = el.parentNode.nextElementSibling;
            let value = el.value;


            input.addEventListener('change', () => {
                (value <= 0 || el.value <= 0) ? el.value = 1 : value = el.value;
            })
            minusBtn.addEventListener('click', () => {
                if (value > 1) {
                    value--;
                }
                input.value = value;
            })
            plusBtn.addEventListener('click', () => {
                if (value <= 999) {
                    value++;
                }
                input.value = value;
            })
        });
    }

})();