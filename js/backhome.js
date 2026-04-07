//404 button back to home
const backHomeBtn = document.querySelector('.back-home');

if(backHomeBtn) {

backHomeBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
});
}