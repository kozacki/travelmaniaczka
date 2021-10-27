const textArea = document.querySelector('.offers__box-textArea');
const textBtns = document.querySelectorAll('.offers__box-bookmarks-btn');
const paragrafs = textArea.querySelectorAll('.offers__box-textArea-item');
const paramOne = document.querySelector('.paramOne');
const paramTwo = document.querySelector('.paramTwo');
const paramThree = document.querySelector('.paramThree');
const paramFour = document.querySelector('.paramFour');
const btnOne = document.querySelector('.btnOne');


let status = 0;


textBtns.forEach(item => {
    
    item.addEventListener('click', () => {
        const temp = item;
        paragrafs.forEach(item => {
            if (temp == textBtns[0] && item.classList.contains('paramOne')) {
                item.classList.add('activeDesc');
            } else if (temp == textBtns[1] && item.classList.contains('paramTwo')) {
                item.classList.add('activeDesc');
                btnOne.style.backgroundColor = 'white';
            } else if (temp == textBtns[2] && item.classList.contains('paramThree')) {
                item.classList.add('activeDesc');
            } else if (temp == textBtns[3] && item.classList.contains('paramFour')) {
                item.classList.add('activeDesc');
            } else {
                item.classList.remove('activeDesc');
            }
        })
    })
})

function showDef() {
    if (!paramOne.classList.contains('actveDesc')) {
        paramOne.classList.toggle('activeDesc');
btnOne.style.backgroundColor = '#5D93AB';
    }else {
        btnOne.style.backgroundColor = 'white';
    }
}



// const clearPar = () => {
//     paragrafs.forEach(item => {
//         item.classList.remove('activeDesc');
//     })
// }

showDef();