const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const body = document.querySelector('body')
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

const headerLogo = document.querySelector('content__Logo');

//let scrollPos = window.scrollY

const highlightMenu = () => {

    const elem = document.querySelector('.section_seperator');
    const aboutMenu = document.querySelector('#about-page');
    const timelineMenu = document.querySelector('#timeline-page');
    const portfolioMenu = document.querySelector('#portf-page');
    const ph_dMenu = document.querySelector('#ph_d-page');
    const publicationsMenu = document.querySelector('#publications-page');
    let scrollPos = window.scrollY;

   // console.log(scrollPos);

    // Add 'highligh' class to my menu items

    if(window.innerWidth > 960 && scrollPos < 600){

        aboutMenu.classList.add('section_seperator');
        portfolioMenu.classList.remove('section_seperator');
        timelineMenu.classList.remove('section_seperator');
        ph_dMenu.classList.remove('section_seperator');
        publicationsMenu.classList.remove('section_seperator');
        return;

    }else if (window.innerWidth > 960 && scrollPos < 1980){

        timelineMenu.classList.add('section_seperator'); 
        aboutMenu.classList.remove('section_seperator');  
        portfolioMenu.classList.remove('section_seperator');
        ph_dMenu.classList.remove('section_seperator');
        publicationsMenu.classList.remove('section_seperator');
        return;

    }else if (window.innerWidth > 960 && scrollPos < 2600){

        timelineMenu.classList.remove('section_seperator'); 
        aboutMenu.classList.remove('section_seperator');  
        portfolioMenu.classList.add('section_seperator');
        ph_dMenu.classList.remove('section_seperator');
        publicationsMenu.classList.remove('section_seperator');
        return;

    }else if (window.innerWidth > 960 && scrollPos < 3400){

        timelineMenu.classList.remove('section_seperator'); 
        aboutMenu.classList.remove('section_seperator');  
        portfolioMenu.classList.remove('section_seperator');
        ph_dMenu.classList.add('section_seperator');
        publicationsMenu.classList.remove('section_seperator');     
        return;

    }else if (window.innerWidth > 960 && scrollPos >= 3400){

        timelineMenu.classList.remove('section_seperator'); 
        aboutMenu.classList.remove('section_seperator');  
        portfolioMenu.classList.remove('section_seperator');
        ph_dMenu.classList.remove('section_seperator');
        publicationsMenu.classList.add('section_seperator');     
        return;
    }

    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('section_seperator');
      }
};

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)


const gotoPortf = () => {

    console.log('I was portf clicked');
    window.scrollTo(0, 1400);

    //console.log(window.scrollY);

    //let scrollPos = window.scrollY;
    //window.scrollY = 1400;

 };

 var gotoPh_d = () => {

    console.log('I was clicked');
   // let scrollPos = window.scrollY;
  // scrollPos = 1400;

 };

 //const goPortf = document.querySelector('#portf-page').addEventListener('click', gotoPortf);
 //const goPh_d = document.querySelector('#ph_d-page').addEventListener('click', gotoPh_d);
 

btnHamburger.addEventListener('click', function(){
  console.log('click hamburger');

  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function(element){
        element.classList.remove('fade-in');  
        element.classList.add('fade-out'); 
    });
    
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
        element.classList.remove('fade-out'); 
        element.classList.add('fade-in');
    })   
  }  
});

function sendMail() //Only wanted this to work with Outlook.
{
    window.location.href = "mailto:r.sers14@gmail.com?";
}




