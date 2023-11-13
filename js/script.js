// jslint devel: true
// eslint-env browser

const pase2 = [...document.querySelectorAll(".card-2")];
const pase1 = [...document.querySelectorAll(".card-1")];
const pase3 = [...document.querySelectorAll(".card-2")];
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

