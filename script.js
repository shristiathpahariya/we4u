document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const carouselContainer = document.querySelector(".carousel-container");
  
    let currentSlide = 0;
  
    // Function to update slide
    function updateSlide(index) {
      // Remove the active class from the current slide and dot
      slides.forEach(slide => slide.classList.remove("active"));
      dots.forEach(dot => dot.classList.remove("active"));
  
      // Add the active class to the new slide and dot
      slides[index].classList.add("active");
      dots[index].classList.add("active");
  
      // Update the background image of the carousel container
      const background = slides[index].getAttribute("data-background");
      carouselContainer.style.backgroundImage = background;
    }
  
    // Show the next slide
    function showNextSlide() {
      currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
      updateSlide(currentSlide);
    }
  
    // Show the previous slide
    function showPrevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to the last slide
      updateSlide(currentSlide);
    }
  
    // Add event listeners to the next and prev buttons
    nextBtn.addEventListener("click", showNextSlide);
    prevBtn.addEventListener("click", showPrevSlide);
  
    // Add event listeners to the dots for navigation
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index;
        updateSlide(currentSlide);
      });
    });
    updateSlide(0);
  });
  