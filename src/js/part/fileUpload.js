function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let thisInput = input;
            let thisImage = thisInput.parentNode.querySelector('.js-file-image');
            let thisLabel = thisInput.parentNode.querySelector('.js-file-load');
            let thisRemove = thisInput.parentNode.querySelector('.js-file-remove');

            thisImage.src = e.target.result;
            thisLabel.classList.add('loaded');
            thisRemove.style.display = 'block';
        };
        reader.readAsDataURL(input.files[0]);
    }
}

(function () {
    const removeBtns = document.querySelectorAll('.js-file-remove');
    Array.prototype.forEach.call(removeBtns, function (removeBtn, i) {
        removeBtn.addEventListener('click', () => {
            let thisInput = removeBtn.nextElementSibling;
            let thisImage = thisInput.parentNode.querySelector('.js-file-image');
            let thisLabel = thisInput.parentNode.querySelector('.js-file-load');
            let thisRemove = thisInput.parentNode.querySelector('.js-file-remove');
    
            thisInput.value = "";
            thisImage.src = "./img/empty.png";
            thisLabel.classList.remove('loaded');
            thisRemove.style.display = 'none';
        });
    });
})();