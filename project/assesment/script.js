const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.right-button');
const prevButton = document.querySelector('.left-button');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

let slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};

const nextSlide = () => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling || slides[0];
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling || dots[0];

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
};

const prevSlide = () => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling || dots[dots.length - 1];

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
};

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

dotsNav.addEventListener('click', (e) => {
  const targetDot = e.target.closest('button');

  if (!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});

let autoPlay = setInterval(nextSlide, 5000);

document.querySelector('.carousel').addEventListener('mouseenter', () => clearInterval(autoPlay));
document.querySelector('.carousel').addEventListener('mouseleave', () => {
  autoPlay = setInterval(nextSlide, 5000);
});
