let btnRight = document.querySelector(".btnRight");
let slider = document.querySelector("img");
let i = 0;

btnRight.addEventListener("click", function () {
  ++i;
  if (i >= slider.length) {
    slider[i - 1].classList.remove("activ");
    i = 0;
    slider[i].classList.add("activ");
  } else {
    slider[i - 1].classList.remove("activ");
    slider[i].classList.add("activ");
  }
});
