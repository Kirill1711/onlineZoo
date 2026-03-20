const toggleCam = document.querySelector('.cams__toggle');
const toggleText = document.querySelector('.cams__toggle-text');
const showHideCam = document.querySelector('.cam__container');
const toggleArrow = document.querySelector('.cams__toggle-arrow');

toggleCam.addEventListener('click', function () {
  if(showHideCam.classList.contains('animals__cam-active')) {
    toggleText.textContent = 'SHOW OTHER CAMS';
    showHideCam.classList.remove('animals__cam-active');
    showHideCam.classList.add('animals__cam-unactive');
    toggleArrow.classList.remove('arrow-top');
  } else {
    toggleText.textContent = 'HIDE OTHER CAMS';
    showHideCam.classList.remove('animals__cam-unactive');
    showHideCam.classList.add('animals__cam-active');
    toggleArrow.classList.add('arrow-top');
  }

});

const toggleIcon = document.querySelector('.icon');
const animalsItems = document.querySelectorAll('.acc--item');
toggleIcon.addEventListener("click", () => {
   animalsItems.forEach(item => {
    item.classList.toggle('open');
    toggleIcon.classList.toggle('rotate-icon');
  });
});