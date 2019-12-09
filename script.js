const button = document.querySelector(".btn-fancy-menu");
const bgTop = document.querySelector(".bg-fancy-top");
const bgMiddel = document.querySelector(".bg-fancy-middle");
const bgBottom = document.querySelector(".bg-fancy-bottom");

button.addEventListener("click", e => {
  console.log("btn clicked");
  bgTop.classList.toggle("bg-top-scale");
  bgMiddel.classList.toggle("bg-middle-scale");
  bgBottom.classList.toggle("bg-bottom-scale");
});
