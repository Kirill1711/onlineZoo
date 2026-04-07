//header

const openburgermenu = document.querySelector('.open-burger');
const closeburgermenu = document.querySelector('.close-burger');
const blockburger = document.querySelector('.burger-menu-block');

openburgermenu.addEventListener('click', function () {
    openburgermenu.classList.remove('active-burger');
    openburgermenu.classList.add('unactive-block');
    closeburgermenu.classList.add('active-burger');
    closeburgermenu.classList.remove('unactive-block');
    blockburger.classList.add('active-burger');
    blockburger.classList.remove('unactive-block');
});

closeburgermenu.addEventListener('click', function () {
    closeburgermenu.classList.remove('active-burger');
    closeburgermenu.classList.add('unactive-block');
    openburgermenu.classList.remove('unactive-block');
    openburgermenu.classList.add('active-burger');
    blockburger.classList.add('unactive-block');
    blockburger.classList.remove('active-burger');
});