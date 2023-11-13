// jslint devel: true
// eslint-env browser

const pase2 = [...document.querySelectorAll(".card-2")];
const pase1 = [...document.querySelectorAll(".card-1")];
const control = document.getElementById("control");

 pase1.forEach(card1 => {
    "use strict";
     control.addEventListener("click", () => {
         card1.classList.toggle("sale");
     });
 });

pase2.forEach(card2 => {
    "use strict";
    control.addEventListener("click", () => {
        card2.classList.toggle("selected");
    });
});


