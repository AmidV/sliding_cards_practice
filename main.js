// Use slidesPlagin function and lines 5-6 to add some activity to slides functionality
function slidesPlagin(activeSlide) {
  const slides = document.querySelectorAll('.slide');

  const randomSlide = Math.floor(Math.random() * 4 + 1);
  slides[activeSlide ? activeSlide : randomSlide].classList.add('active');

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
}

slidesPlagin()