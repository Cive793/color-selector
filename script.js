"use strict";

const colorInput = document.querySelector("input");

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

  showHex();
}

function showHex() {
  hex.textContent = colorInput.value;
  getRgb();
}

function getRgb() {
  console.log("getRgb");
  const hexValue = colorInput.value;
  const rValue = hexValue.substring(1, 3);
  const gValue = hexValue.substring(3, 5);
  const bValue = hexValue.substring(5);
  console.log(rValue);
  console.log(gValue);
  console.log(bValue);
  calculateRgb(rValue, gValue, bValue);
}

function calculateRgb(r, g, b) {
  const R = parseInt("0x" + r, 16);
  const G = parseInt("0x" + g, 16);
  const B = parseInt("0x" + b, 16);
  console.log(R, G, B);
  showRgb(R, G, B);
}

function showRgb(R, G, B) {
  const rID = document.querySelector("#r");
  const gID = document.querySelector("#g");
  const bID = document.querySelector("#b");

  rID.textContent = R + ", ";
  gID.textContent = G + ", ";
  bID.textContent = B;
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
