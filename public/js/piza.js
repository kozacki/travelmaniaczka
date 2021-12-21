const galleryFrame = document.querySelector('.offers__box-img-item');
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');

const gallery = [
    'img/piza/piza.png',
    'img/piza/Piza_ATRAKCJE.png',
    'img/piza/Piza_PRZEWODNIK.png',
    'img/piza/Piza_RESTAURACJE.png',
    'img/piza/Piza_ZAKWATEROWANIE.png',
];

let counter = 0

function nextImg() {
    if (counter < gallery.length) {


        galleryFrame.src = gallery[counter];
        counter++;

    } else {
        counter = 0;
    }
};

function prevImg() {

    if (counter > 0) {
        counter--;
        galleryFrame.src = gallery[counter];
    } else {
        counter = gallery.length;
    }
}











arrowRight.addEventListener('click', nextImg);
arrowLeft.addEventListener('click', prevImg);