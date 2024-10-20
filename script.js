let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slideWidth = slides[0].offsetWidth + 20; // Considerando el margen entre tarjetas

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
