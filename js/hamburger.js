var bodyEl = document.querySelector('body');
var hamburgerBtn = document.querySelector('.hamburger-button');

function expandList() {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.classList.toggle('no-display');
}

hamburgerBtn.addEventListener('click', function () { 
    
    var hamburgerTop = this.querySelector('#hamburger-top');
    var hamburgerMiddle = this.querySelector('#hamburger-middle');
    var hamburgerBottom = this.querySelector('#hamburger-bottom');
    bodyEl.classList.toggle('filter-b');
    this.classList.toggle('p-fixed');
    this.classList.toggle('to-bottom');
    hamburgerTop.classList.toggle('top-transform');
    hamburgerMiddle.classList.toggle('mid-transform');
    hamburgerBottom.classList.toggle('bottom-transform');
    
    expandList();
});



