//Bottom To Top Btn  
const bottom_to_top = document.querySelector(".bottom-to-top-btn");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      bottom_to_top.classList.add("active");
    } else {
      bottom_to_top.classList.remove("active");
    }
  })