
const slideshow = document.getElementById('slider');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

function updateArrows() {
  const scrollLeft = slideshow.scrollLeft;
  const maxScroll = slideshow.scrollWidth - slideshow.clientWidth;

  leftArrow.classList.toggle('hidden', scrollLeft <= 0);
  rightArrow.classList.toggle('hidden', scrollLeft >= maxScroll - 1);
}

leftArrow.addEventListener('click', () => {
  slideshow.scrollBy({ left: -700, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  slideshow.scrollBy({ left: 700, behavior: 'smooth' });
});

slideshow.addEventListener('scroll', updateArrows);
window.addEventListener('load', updateArrows);

const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

