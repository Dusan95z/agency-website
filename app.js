// NAVIGACIJA 

let bars = document.querySelector('.bars-menu');
bars.addEventListener('click', active);
function active() {
  bars.classList.toggle('active');
}

let navlist = document.querySelector('.navlist');
bars.addEventListener('click', Active);
function Active() {
  navlist.classList.toggle('active');
}

let header = document.querySelector('.header');
bars.addEventListener('click', moveDown);
function moveDown() {
  header.classList.toggle('move-down');
}

// LEARN MORE BUTTON

let learnMoreBtn = document.querySelector('.banner-button');
let learnMore = document.querySelector('.learn-more');
let closeLearnMore = document.querySelector('.closelearnmore');
let bannerp = document.querySelector('.banner-p');

learnMoreBtn.addEventListener('click', learnmore);
function learnmore() {
  learnMore.innerHTML = 'Klikom na strelice levo i desno možete promeniti naslov banera.';
  learnMore.style.textAlign = 'center';
  bannerp.innerHTML = 'Klikom na X takođe vraćate stari naslov';
  closeLearnMore.innerHTML = '<i class="fa fa-close"></i>';
}

closeLearnMore.addEventListener('click' , closeBtn);
function closeBtn() {
  learnMore.innerHTML = '';
  closeLearnMore.innerHTML = '';
  bannerh1.innerHTML = 'This is a main heading';
  bannerp.innerHTML = 'Klikom na Learn More možete otvoriti skriveni tekst';
}

// CHEVRONS CLICK

let bannerh1 = document.querySelector('.banner-h1');
let chevronLeft = document.querySelector('.fa-chevron-circle-left');
let chevronRight = document.querySelector('.fa-chevron-circle-right');

chevronLeft.addEventListener('click', headerLeft);
function headerLeft() {
  bannerh1.innerHTML = 'Naslov kada kliknete na levu strelicu';
}

chevronRight.addEventListener('click', headerRight);
function headerRight() {
  bannerh1.innerHTML = 'Naslov nakon desne strelice';
}

// FORM

let inputText = document.querySelector('.inputtext');
let inputEmail = document.querySelector('.inputemail');
let textarea = document.querySelector('.textarea');
let inputSubmit = document.querySelector('.inputsubmit');

inputSubmit.addEventListener('click', clearForm);
function clearForm() {
  if (inputText.value != '' & inputEmail.value != '' & textarea.value != '') {
    alert('Form Filled Successfully');
    inputText.value = '';
    inputEmail.value = '';
    textarea.value = '';
  } else {
    alert('Please fill out all form fields');
    return false;
  }
}

// TESTIMONIALS

let testimonialsP = document.querySelector('.testimonials-p');
let testimonialsH2 = document.querySelector('.testimonials-h2');
let arrowLeft = document.querySelector('.fa-chevron-left');
let arrowRight = document.querySelector('.fa-chevron-right');



