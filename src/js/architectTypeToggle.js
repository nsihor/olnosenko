const eBtn = document.querySelector('[data-action="eBtn"]');
const iBtn = document.querySelector('[data-action="iBtn"]');
const exteriors = document.querySelector('.exteriors');
const interiors = document.querySelector('.interiors');

function typeToggle() {
    exteriors.classList.toggle('d-n');
    interiors.classList.toggle('d-n');

    eBtn.disabled = !eBtn.disabled;
    iBtn.disabled = !iBtn.disabled;
}

eBtn.addEventListener('click', typeToggle);
iBtn.addEventListener('click', typeToggle);