const slides = document.querySelectorAll('.slide');


for(const slide of slides) {
  
  slide.addEventListener('click', () => {
    clearActiveAndPointerClasses();
    slide.classList.add('active');
    slide.classList.remove('point');
  })
}

const clearActiveAndPointerClasses = () => {
  slides.forEach(slide => slide.classList.remove('active'));
  slides.forEach(slide => slide.classList.add('point'));
}
