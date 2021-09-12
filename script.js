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
  calculateHsl(R, G, B);
}

function showRgb(R, G, B) {
  const rID = document.querySelector("#r");
  const gID = document.querySelector("#g");
  const bID = document.querySelector("#b");

  rID.textContent = R + ", ";
  gID.textContent = G + ", ";
  bID.textContent = B;
}

function calculateHsl(R, G, B) {
  R /= 255;
  G /= 255;
  B /= 255;

  let h, s, l;

  const min = Math.min(R, G, B);
  const max = Math.max(R, G, B);

  if (max === min) {
    h = 0;
  } else if (max === R) {
    h = 60 * (0 + (G - B) / (max - min));
  } else if (max === G) {
    h = 60 * (2 + (B - R) / (max - min));
  } else if (max === B) {
    h = 60 * (4 + (R - G) / (max - min));
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
  roundHsl(h, s, l);
}

function roundHsl(h, s, l) {
  const hRound = Math.round(h);
  const sRound = Math.round(s);
  const lRound = Math.round(l);
  showHsl(hRound, sRound, lRound);
}

function showHsl(h, s, l) {
  const hID = document.querySelector("#h");
  const sID = document.querySelector("#s");
  const lID = document.querySelector("#l");

  hID.textContent = h + ", ";
  sID.textContent = s + ", ";
  lID.textContent = l;
}
