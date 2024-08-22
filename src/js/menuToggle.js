const burgerBtn = document.querySelector('[data-action="nd-burger"]');
const closeBtn = document.querySelector('[data-action="nd-close"]');
const mobMenu = document.querySelector('[data-action="nd-mob-menu"]')

function toggleBodyScroll() {
    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = '';
    } else {
        document.body.style.overflow = 'hidden';
    }
}

function toggleMenu() {
    mobMenu.classList.toggle('d-n');

    toggleBodyScroll();
}

burgerBtn.addEventListener('click', toggleMenu);

closeBtn.addEventListener('click', toggleMenu);