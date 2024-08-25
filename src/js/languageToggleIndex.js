const mBtn = document.querySelector('[data-action="m-lang-btn"]');
const dBtns = document.querySelectorAll('[data-action="d-lang-btn"]');
const pMain = document.querySelector('[datatype="page-m"]');
const psContact = document.querySelectorAll('[datatype="page-c"]');
const mainTitle = document.querySelector('.main-title');
const slogan = document.querySelector('.main-title-secondary');
const titles = document.querySelectorAll('.title');
const advantages = document.querySelectorAll('.text');

const translations = {
    en: {
        pages: [
            'home',
            'portfolio',
            'contact'
        ],
        mainTitle: 'Architectural Visualization',
        slogan: 'See it before it becomes real',
        titles: [
            'How I Benefit Clients',
            'What I Do',
            'Why Choose Me',
        ],
        advantages: [
            'I help you visualize projects before they come to life, simplifying decision-making and attracting investors. My photorealistic visualizations allow your clients to see the final result even before construction begins.',
            'I create high-quality 3D visualizations of interiors and exteriors that accurately reflect your ideas and plans. My work highlights the uniqueness and advantages of each project, providing detailed and realistic images.',
            'With over 10 years of experience in architectural visualization, I guarantee a professional approach and attention to detail. Utilizing advanced technologies and offering a personalized approach to each project ensures high quality and client satisfaction.',
        ]
    },
    pl: {
        pages: [
            'główna',
            'portfolio',
            'kontakt'
        ],
        mainTitle: 'Wizualizacja Architektoniczna',
        slogan: 'Zobacz to, zanim stanie się rzeczywistością',
        titles: [
            'Jakie korzyści przynoszę klientom',
            'Co robię',
            'Dlaczego warto wybrać mnie',
        ],
        advantages: [
            'Pomagam zwizualizować projekty przed ich realizacją, upraszczając proces podejmowania decyzji i przyciągając inwestorów. Moje fotorealistyczne wizualizacje pozwalają klientom zobaczyć końcowy efekt jeszcze przed rozpoczęciem budowy.',
            'Tworzę wysokiej jakości wizualizacje 3D wnętrz i zewnętrz, które dokładnie odzwierciedlają Twoje pomysły i plany. Moje prace podkreślają unikalność i zalety każdego projektu, dostarczając szczegółowe i realistyczne obrazy.',
            'Z ponad 10 lat doświadczenia w wizualizacji architektonicznej, gwarantuję profesjonalne podejście i dbałość o szczegóły. Wykorzystanie zaawansowanych technologii oraz oferowanie spersonalizowanego podejścia do każdego projektu zapewnia wysoką jakość i zadowolenie klientów.',
        ]
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
    mainTitle.textContent = translations[l].mainTitle;
    slogan.textContent = translations[l].slogan;
    titles.forEach((t, i) => t.textContent = translations[l].titles[i]);
    advantages.forEach((a, i) => a.textContent = translations[l].advantages[i]);
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