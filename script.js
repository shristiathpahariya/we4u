document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const carouselContainer = document.querySelector(".carousel-container");
  
    let currentSlide = 0;
  
    // Function to update slide
    function updateSlide(index) {
      slides.forEach(slide => slide.classList.remove("active"));
      dots.forEach(dot => dot.classList.remove("active"));

      slides[index].classList.add("active");
      dots[index].classList.add("active");

      const background = slides[index].getAttribute("data-background");
      carouselContainer.style.backgroundImage = background;
    }
  
    function showNextSlide() {
      currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
      updateSlide(currentSlide);
    }
  
    function showPrevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to the last slide
      updateSlide(currentSlide);
    }
  
    nextBtn.addEventListener("click", showNextSlide);
    prevBtn.addEventListener("click", showPrevSlide);
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index;
        updateSlide(currentSlide);
      });
    });
    updateSlide(0);
  });
  