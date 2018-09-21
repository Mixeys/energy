(function() {
  "use strict";

  let hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  });

  let range = document.querySelector("#range");

  range.addEventListener("input", e => {
    let big = document.querySelector(".boris__img1");
    big.style.width = e.target.value + "%";
  });
  
})();
