const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

// funkcja która dodaje lub zabiera klase nav--active do wysunięcia menu
const handleNav = () => {
    nav.classList.toggle('nav--active')

    navBtnBars.classList.toggle('black-bars-color')

    // funkcja usuwająca klase nav--active po kliknięciu w link w menu
    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })

    // wywołanie funkcji animacji linków menu
    handleNavItemsAnimation();
}

// Animacja linków w nawigacji
const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')

        //opoznienie kazdego linku z osobna
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

const handleObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {

        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bars-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection) {
            navBtnBars.classList.remove('black-bars-color')
        }
    })
}

//Funkcja do wyświetlania roku w stopce
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();




// nasłuchiwanie kliknięcia przycisku menu
navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);

