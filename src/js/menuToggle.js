const burgerBtn = document.querySelector('[data-action="nd-burger"]');
const mobMenu = document.querySelector('[data-action="nd-mob-menu"]')
const burger = document.querySelector('.burger');
const title = document.querySelector('.h-title');
const header = document.querySelector('header');

function toggleBodyScroll() {
    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = '';
    } else {
        document.body.style.overflow = 'hidden';
    }
}

function toggleMenu() {
    mobMenu.classList.toggle('open');
    burger.classList.toggle('active');
    title.classList.toggle('transparent');
    header.classList.toggle('bgw');

    toggleBodyScroll();
}

burgerBtn.addEventListener('click', toggleMenu);
