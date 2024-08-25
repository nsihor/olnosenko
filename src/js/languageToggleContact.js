const mBtn = document.querySelector('[data-action="m-lang-btn"]');
const dBtns = document.querySelectorAll('[data-action="d-lang-btn"]');
const pMain = document.querySelector('[datatype="page-m"]');
const psContact = document.querySelectorAll('[datatype="page-c"]');
const title = document.querySelector('.c-title');

const translations = {
    en: {
        pages: [
            'home',
            'portfolio',
            'contact'
        ],
        title: 'Contact'
    },
    pl: {
        pages: [
            'główna',
            'portfolio',
            'kontakt'
        ],
        title: 'Kontakt'
    }
}

const storageKey = 'lang';
let currentLang = 'en';

function setLang() {
    const storedLang = localStorage.getItem(storageKey);
    if (storedLang) {
        currentLang = storedLang;
    }

    if (storedLang === 'pl') {
        btnsToggle(storedLang);
        textToggle(storedLang);
    }
}

setLang();

if (currentLang === 'pl') {
    dBtns[0].disabled = false;
    dBtns[1].disabled = true;
} else {
    dBtns[0].disabled = true;
    dBtns[1].disabled = false;
}

function btnsToggle(l) {

    if (l === 'en'){
        mBtn.textContent = 'PL';
    } else {
        mBtn.textContent = 'EN';
    }

    dBtns.forEach(btn => btn.disabled = !btn.disabled);
}

function textToggle(l) {
    pMain.textContent = translations[l].pages[0];
    psContact.forEach(p => p.textContent = translations[l].pages[2]);

    title.textContent = translations[l].title;
}

function langToggle() {
    if (currentLang === 'en') {
        currentLang = 'pl';
    } else {
        currentLang = 'en';
    }

    localStorage.setItem(storageKey, currentLang);

    btnsToggle(currentLang);
    textToggle(currentLang);
}

mBtn.addEventListener('click', langToggle);
dBtns.forEach(b => b.addEventListener('click', langToggle));