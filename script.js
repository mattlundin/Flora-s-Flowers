// Navbar
const btn = document.querySelector('#btn');
const dropdown = document.querySelector('.drop')

btn.addEventListener('click', () => {
  if(dropdown.style.display == 'none') {
    dropdown.style.display = 'flex';
  } else {
    dropdown.style.display = 'none';
  }
});

// Responsive Nav
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li');
  
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    // burger animation
    burger.classList.toggle('toggle');
    });
    // CLOSE NAV ON LI CLICK
    /*
    for (let i = 0; i < navItems.length; i++) {
      let closeNav = navItems[i];

      closeNav.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
          navLinks.classList.toggle('nav-active');
        }
        //TOGGLE BURGER
        if (burger.classList.contains('toggle')) {
          burger.classList.toggle('toggle');
        }
      });
    }
    */
  };
  navSlide();
// End of Navbar



// .home Slideshow
let indexValue = 0;
function slideShow() {
  setTimeout(slideShow, 2500);
  let i;
  const img = document.querySelectorAll('.image');
  for (i = 0; i < img.length; i++) {
    img[i].style.display = 'none';
  }
  indexValue++;
  if (indexValue > img.length) {
    indexValue = 1;
  }
  img[indexValue -1].style.display = 'block';
}
slideShow();
// End of .home Slideshow

