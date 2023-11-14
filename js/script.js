// jslint devel: true
// eslint-env browser

const pase2 = [...document.querySelectorAll(".card-2")];
const pase1 = [...document.querySelectorAll(".card-1")];
const control = document.getElementById("controlPrev");

 pase1.forEach(card1 => {
    "use strict";
     control.addEventListener("click", () => {
         card1.classList.toggle("backSelected");
     });
 });

pase2.forEach(card2 => {
    "use strict";
    control.addEventListener("click", () => {
        card2.classList.toggle("backSale");
    });
});

const controls = document.getElementById("controlNext");

pase1.forEach(carda => {
    "use strict";
     controls.addEventListener("click", () => {
         carda.classList.toggle("sale");
     });
 });

pase2.forEach(cardb => {
    "use strict";
    controls.addEventListener("click", () => {
        cardb.classList.toggle("selected");
    });
});


window.onscroll = function() {fijarMenu()};

function fijarMenu() {
    if (document.documentElement.scrollTop > 20) {
      document.getElementById("blanco").className = "blancoFijo";
      document.getElementById("mdesplegado").className = "mdesplegado";
      document.getElementById("blancoFijoMenu").className = "blancoFijoMenu";
      document.getElementById("encontrar").className = "micono";
    } else {
      document.getElementById("blanco").className = "navbar";
    }
  }

  
  const collapseElementList = document.querySelectorAll('.collapse')
  const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))
