// This for sidebar

const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const offcanvasMenu = document.querySelector('.side-navbar');

openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    offcanvasMenu.classList.add('active');
});

closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    offcanvasMenu.classList.remove('active');
});

