

const galleryFrame = document.querySelector('.offers__box-img-item');
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');





const gallery = [
    'img/mediolan/mediolan.png',
    'img/mediolan/Mediolan_PRZEWODNIK.png',
    'img/mediolan/Mediolan_RESTAURACJE.png',
    'img/mediolan/Mediolan_ZAKWATEROWANIE.png',
];



let counter = 0
function nextImg() {
    if(counter < gallery.length  ) {
        
        
        galleryFrame.src = gallery[counter];
        counter++;
       
    } else {
        counter = 0;
    }
};

function prevImg() {

    if ( counter > 0 ) {
        counter--;
        galleryFrame.src = gallery[counter];
    } else {
        counter = gallery.length;
    }
}

arrowRight.addEventListener('click', nextImg);
arrowLeft.addEventListener('click', prevImg);

