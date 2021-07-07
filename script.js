const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const active = document.querySelector(".active");
const slider = document.querySelector(".slider-items");
const s = 991;
let a = 0;
let b = -4955;

next.addEventListener("click", (e) => {
  a = a - s;
  slider.style.transform = "translate(" + a + "px, 0)";
  if (a < -4495) {
    a = 991;
  }
  console.log(a);
});

prev.addEventListener("click", (e) => {
  b = b + s;
  slider.style.transform = "translate(" + b + "px, 0)";
  if (b < -4955) {
    b = 0;
  }
  console.log(a);
});
