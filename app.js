// MENU BAR SECTION //

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

const faders = document.querySelector(".fade-in");
const faders1 = document.querySelector(".fade-in1");
const faders2 = document.querySelector(".fade-in2");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const galleryMenu = document.querySelector('#gallery-page');
  const contactMenu = document.querySelector('#contact-page');
  let scrollPos = window.scrollY;
  //console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if(window.innerWidth < 600) {

    homeMenu.classList.remove('highlight');
    galleryMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');

    if (scrollPos < 600) {
      //null
      return;
    } else if (scrollPos < 1920) {
        faders.classList.add("appear");
      return;
    } else if (scrollPos < 4165) {
        faders1.classList.add("appear");
        return;
    } else if (scrollPos < 20000) {
        faders2.classList.add("appear");
        return;
    }

  }
  else if(window.innerWidth < 960 && window.innerWidth >= 600) {

    homeMenu.classList.remove('highlight');
    galleryMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');

    if (scrollPos < 675) {
      //null  
      return;
    } else if (scrollPos < 1880) {
        faders.classList.add("appear");
      return;
    } else if (scrollPos < 3200) {
        faders1.classList.add("appear");
        return;
    } else if (scrollPos < 20000) {
        faders2.classList.add("appear");
        return;
    }

  }
  else if(window.innerWidth >= 960) {

    if (scrollPos < 690) {
      homeMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      return;
    } else if (scrollPos < 1540) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        galleryMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');

      faders.classList.add("appear");
      return;
    } else if (scrollPos < 2100) {
        galleryMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
    
      faders1.classList.add("appear");
      return;
    } else if (scrollPos < 3450) {
        contactMenu.classList.add('highlight');
        galleryMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');

      faders2.classList.add("appear");
      return;
    }

  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    galleryMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 960 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

/*----------------------------------------------------------------------*/
/* Fade in animation */
/*----------------------------------------------------------------------*/

/*
const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
*/