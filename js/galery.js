document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll(".carousel");
    
    carousels.forEach(carousel => {
      const carouselItems = carousel.querySelectorAll(".carousel-item");
      const prevBtn = carousel.querySelector(".prev-btn");
      const nextBtn = carousel.querySelector(".next-btn");
      let currentIndex = 0;
  
      function showItem(index) {
        carouselItems.forEach((item, i) => {
          if (i === index) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      }
  
      function nextSlide() {
        currentIndex++;
        if (currentIndex >= carouselItems.length) {
          currentIndex = 0;
        }
        showItem(currentIndex);
      }
  
      function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = carouselItems.length - 1;
        }
        showItem(currentIndex);
      }
  
      nextBtn.addEventListener("click", nextSlide);
      prevBtn.addEventListener("click", prevSlide);
  
      showItem(currentIndex);
    });
  });
  