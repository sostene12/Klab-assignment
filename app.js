// todo app
const tabHeader = document.querySelector('.tab-header');
const tabHeaderElements = document.querySelectorAll('.tab-header > div');
const tabBody = document.querySelector('.tab-body');
const tabBodyData = document.querySelectorAll('.tab-body > div');

for(let i=0;i<tabHeaderElements.length;i++){
    tabHeaderElements[i].addEventListener('click',() =>{
        tabHeader.querySelector('.active').classList.remove('active');
        tabHeaderElements[i].classList.add('active');
        tabBody.querySelector('.active').classList.remove('active');
        tabBodyData[i].classList.add('active');
    })
}






