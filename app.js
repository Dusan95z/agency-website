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

arrowLeft.addEventListener('click', arrowLeftF);
function arrowLeftF() {
  if(testimonialsP.innerHTML === 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 500s, when an unknown printer took a galley of type.' & testimonialsH2.innerHTML === 'John Dove') {
    testimonialsP.innerHTML = 'Impossible is for the unwilling.';
    testimonialsH2.innerHTML = 'John Keats';
  } else if (testimonialsP.innerHTML === 'Impossible is for the unwilling.' & testimonialsH2.innerHTML === 'John Keats') {
    testimonialsP.innerHTML = 'No pressure, no diamonds.';
    testimonialsH2.innerHTML = 'Thomas Carlyle';
  } else {
    testimonialsP.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 500s, when an unknown printer took a galley of type.';
    testimonialsH2.innerHTML = 'John Dove';
  }
}

arrowRight.addEventListener('click', arrowRightF);
function arrowRightF() {
  if(testimonialsP.innerHTML === 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 500s, when an unknown printer took a galley of type.' & testimonialsH2.innerHTML === 'John Dove') {
    testimonialsP.innerHTML = 'No pressure, no diamonds.';
    testimonialsH2.innerHTML = 'Thomas Carlyle';
  } else if (testimonialsP.innerHTML === 'No pressure, no diamonds.' & testimonialsH2.innerHTML === 'Thomas Carlyle') {
    testimonialsP.innerHTML = 'Impossible is for the unwilling.';
    testimonialsH2.innerHTML = 'John Keats';
  } else {
    testimonialsP.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 500s, when an unknown printer took a galley of type.';
    testimonialsH2.innerHTML = 'John Dove';
  }
}

// PLANS

let buy1 = document.querySelector('.pib1');
let buy2 = document.querySelector('.pib2');
let buy3 = document.querySelector('.pib3');

buy1.addEventListener('click', bought1);

function bought1() {
  buy1.style.backgroundColor="green";
  buy1.style.width="30rem";
  buy1.style.height="10rem";
  buy1.style.fontSize="3rem";
  buy1.innerHTML = 'Shopping Successful';
  
  setTimeout(timeout1, 3000);
}

buy2.addEventListener('click', bought2);

function bought2() {
  buy2.style.backgroundColor="green";
  buy2.style.width="30rem";
  buy2.style.height="10rem";
  buy2.style.fontSize="3rem";
  buy2.innerHTML = 'Shopping Successful';
  
  setTimeout(timeout2, 3000);
}

buy3.addEventListener('click', bought3);

function bought3() {
  buy3.style.backgroundColor="green";
  buy3.style.width="30rem";
  buy3.style.height="10rem";
  buy3.style.fontSize="3rem";
  buy3.innerHTML = 'Shopping Successful';
  
  setTimeout(timeout3, 3000);
}

function timeout1() {
  if(buy1.innerHTML = 'Shopping Successful') {
    buy1.style.backgroundColor="rgb(72, 84, 96)";
    buy1.style.width = "15rem";
    buy1.style.height = "4rem";
    buy1.style.fontSize = "1.7rem";
    buy1.innerHTML ="Buy now";
  }
}

function timeout2() {
  if(buy2.innerHTML = 'Shopping Successful') {
    buy2.style.backgroundColor="rgb(73, 203, 205)";
    buy2.style.width = "15rem";
    buy2.style.height = "4rem";
    buy2.style.fontSize = "1.7rem";
    buy2.innerHTML ="Buy now";
  }
}

function timeout3() {
  if(buy3.innerHTML = 'Shopping Successful') {
    buy3.style.backgroundColor="rgb(72, 84, 96)";
    buy3.style.width = "15rem";
    buy3.style.height = "4rem";
    buy3.style.fontSize = "1.7rem";
    buy3.innerHTML = "Buy now";
  }
}

// SERVICE

let circle1 = document.querySelector('.circle1');
let circle2 = document.querySelector('.circle2');
let circle3 = document.querySelector('.circle3');
let circle4 = document.querySelector('.circle4');
let rocketIcon = document.querySelector('.fa-rocket');
let desktopIcon = document.querySelector('.fa-desktop');
let bulbIcon = document.querySelector('.fa-lightbulb-o');
let tabletIcon = document.querySelector('.fa-tablet');
let sb1 = document.querySelector('.sb1');
let sb2 = document.querySelector('.sb2');
let sb3 = document.querySelector('.sb3');
let sb4 = document.querySelector('.sb4');

sb1.addEventListener('mouseover', anim1);
function anim1() {
  circle1.style.borderColor = "red";
  circle1.style.transition = "all 3s";
  rocketIcon.style.transform = "rotate(270deg)";
  rocketIcon.style.color = "red";
  rocketIcon.style.transition = "all 3s";
}

sb2.addEventListener('mouseover', anim2);
function anim2() {
  circle2.style.borderColor = "blue";
  circle2.style.transition = "all 3s";
  desktopIcon.style.color = "blue";
  desktopIcon.style.transform = "rotate(360deg)";
  desktopIcon.style.transition = "all 3s";
}

sb3.addEventListener('mouseover', anim3);
function anim3() {
  circle3.style.borderColor = "darkorange";
  circle3.style.backgroundColor = "yellow";
  bulbIcon.style.transform = "rotate(180deg) scale(2)";
  bulbIcon.style.transition = "all 3s";
}

sb4.addEventListener('mouseover', anim4);
function anim4() {
  circle4.style.borderColor = "green";
  circle4.style.transition = "all 3s";
  tabletIcon.style.transform = "rotateY(180deg)";
  tabletIcon.style.color = "green";
  tabletIcon.style.transition = "all 3s";
}

let sp1 = document.querySelector('.sp1');
let sp2 = document.querySelector('.sp2');
let sp3 = document.querySelector('.sp3');
let sp4 = document.querySelector('.sp4');

sb1.addEventListener('click', sbtext1); 
function sbtext1() {
  sp1.innerHTML = 'You can find many different styles of web designs on our website.';
  sp1.style.color = "red";
}

sb2.addEventListener('click', sbtext2);
function sbtext2() {
  sp2.innerHTML = 'Worlds best web developers are working with us to help us make designs according to your imagination.';
  sp2.style.color = "blue";
}

sb3.addEventListener('click', sbtext3);
function sbtext3() {
  sp3.innerHTML = 'Bloggers are also part of our community and they provide you their impressions of our website.';
  sp3.style.color = "darkorange";
}

sb4.addEventListener('click', sbtext4);
function sbtext4() {
  sp4.innerHTML = 'If you dont have PC in front of you - no worries. Our website is fully responsible and can be used on small devices like phones.';
  sp4.style.color = "green";
}

// BODY LOAD

