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
  const nav = document.querySelector('.nav-links');
  
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    // burger animation
    burger.classList.toggle('toggle');
    });
  };
  navSlide();
// End of Navbar



// .home Slideshow
let indexValue = 0;
function slideShow() {
  setTimeout(slideShow, 2500);
  let i;
  const img = document.querySelectorAll('.image');
  for(i = 0; i < img.length; i++) {
    img[i].style.display = 'none';
  }
  indexValue++;
  if(indexValue > img.length) {
    indexValue = 1;
  }
  img[indexValue -1].style.display = 'block';
}
slideShow();
// End of .home Slideshow

