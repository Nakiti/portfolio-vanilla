function createImageCarousel(images) {
   const carousel = document.getElementById("image-carousel");
   carousel.classList.add("carousel");
 
   images.forEach(src => {
     const img = document.createElement("img");
     img.src = src;
     img.alt = "Project image";
     img.className = "carousel-img";
     carousel.appendChild(img);
   });
}
 