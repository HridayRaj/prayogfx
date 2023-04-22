document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const titleElement = document.getElementById("title");
  
    function setActiveCarouselItem() {
      for (let i = 0; i < carouselItems.length; i++) {
        if (carouselItems[i].classList.contains("active")) {
          if (i === 0) {
            console.log("active 1")
            titleElement.style.backgroundImage = "linear-gradient(125deg, #343434, #b0b0b0)";
          } else if (i === 1) {
            console.log("active 2");
            titleElement.style.removeProperty("background-image");
            titleElement.style.backgroundColor="#a7dbf1";
          }
          else if(i == 2){
            console.log("active 3");
            titleElement.style.removeProperty("background-image");
            titleElement.style.backgroundColor="white";
          }
          else if(i == 3){
            console.log("active 4");
            titleElement.style.removeProperty("background-image");
            titleElement.style.backgroundColor="white";
          }

        }
      }
    }
  
    setActiveCarouselItem(); // Call the function once to set the initial background color
  
    // Listen for the 'slid.bs.carousel' event on the carousel to update the background color when the active slide changes
    const carousel = document.querySelector(".carousel");
    carousel.addEventListener("slid.bs.carousel", setActiveCarouselItem);
  });
