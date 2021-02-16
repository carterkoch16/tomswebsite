const bannerHeight = document.querySelector(".banner").clientHeight;
const navHeight = document.querySelector("nav").clientHeight;
console.log(bannerHeight);
document.addEventListener("scroll", (event) => {
  console.log(window.scrollY);
  if (window.scrollY > bannerHeight - navHeight / 2) {
    document.querySelector("nav").classList.add("darkfont");
  } else if (window.scrollY < bannerHeight) {
   document.querySelector("nav").classList.remove("darkfont");
  }
});

