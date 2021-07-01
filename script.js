let btnRight = document.querySelector(".btnRight");
let btnLeft = document.querySelector(".btnLeft");
let slides = document.querySelectorAll("img");
let i = 0;

btnRight.addEventListener("click", function () {
  ++i;
  if (i >= slides.length) {
    slides[i - 1].classList.remove("block");
    i = 0;
    slides[i].classList.add("block");
  } else {
    slides[i - 1].classList.remove("block");
    slides[i].classList.add("block");
  }
});

btnLeft.addEventListener("click", function () {
  --i;
  if (i >= slides.length) {
    slides[i + 1].classList.add("block");
    i = 0;
    slides[i].classList.remove("block");
  } else {
    slides[i + 1].classList.add("block");
    slides[i].classList.remove("block");
  }
});
