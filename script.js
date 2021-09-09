"use strict";

const colorInput = document.querySelector("input");
/* const hex;
const rgb;
const hsl; */

window.addEventListener("DOMContentLoaded", prepareData);

function prepareData() {
  getInput();
}

function getInput() {
  console.log("getInput");
  colorInput.addEventListener("input", showColor);
  //console.log(input);
}

function showColor() {
  console.log("showColor");
  const color = document.querySelector(".colorbox");
  color.style.backgroundColor = colorInput.value;
  getHex();
}

function getHex() {
  console.log("getHex");
  const hex = document.querySelector("#hex");
  hex.textContent = colorInput.value;
  getRgb();
}

function getRgb() {
  console.log("getRgb");
  const hexValue = colorInput.value;
  let r = hexValue.substring(1, 3);
  let g = hexValue.substring(3, 5);
  let b = hexValue.substring(5);
  console.log(r);
  console.log(g);
  console.log(b);
}

/* r /= 255;
g /= 255;
b /= 255;

let h, s, l;

const min = Math.min(r, g, b);
const max = Math.max(r, g, b);

if (max === min) {
  h = 0;
} else if (max === r) {
  h = 60 * (0 + (g - b) / (max - min));
} else if (max === g) {
  h = 60 * (2 + (b - r) / (max - min));
} else if (max === b) {
  h = 60 * (4 + (r - g) / (max - min));
}

if (h < 0) {
  h = h + 360;
}

l = (min + max) / 2;

if (max === 0 || min === 1) {
  s = 0;
} else {
  s = (max - l) / Math.min(l, 1 - l);
}
// multiply s and l by 100 to get the value in percent, rather than [0,1]
s *= 100;
l *= 100;

console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
 */
