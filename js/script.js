"use strict";

/* -------------------------------------------------
   1) SCROLL-OBSERVER: Tildel .show-animate ved scroll
--------------------------------------------------- */
const sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    const scrollDistance = window.scrollY;
    const secDistance = sec.offsetTop - window.innerHeight / 1.3;

    if (scrollDistance >= secDistance) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

/* -------------------------------------------------
   2) LYD-OBJEKTER (opgave 4)
--------------------------------------------------- */
const soundDog = new Audio("sound/dog.wav");
const soundHorse = new Audio("sound/horse.wav");
const soundBear = new Audio("sound/bear.wav");

/* -------------------------------------------------
   3) KLIK-FUNKTIONER (opgave 3)
--------------------------------------------------- */

// Hund
const dogElem = document.getElementById("dogElem");
if (dogElem) {
  dogElem.addEventListener("click", function () {
    this.classList.toggle("anim-scale");
    soundDog.play();
  });
}

// Isbjørn
const bearElem = document.getElementById("bearElem");
if (bearElem) {
  bearElem.addEventListener("click", function () {
    this.classList.toggle("anim-rotate");
    soundBear.play();
  });
}

// Hest
const horseElem = document.getElementById("horseElem");
if (horseElem) {
  horseElem.addEventListener("click", function () {
    this.classList.toggle("anim-skew");
    soundHorse.play();
  });
}

/* -------------------------------------------------
   4) EGEN SEKTION – SEC6 (opgave 5)
--------------------------------------------------- */
const customElem = document.getElementById("customElem");
if (customElem) {
  customElem.addEventListener("click", function () {
    this.classList.toggle("anim-pop");
  });
}
