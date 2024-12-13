const userInput = document.querySelector(".input-box textarea");
const ftoc = document.getElementById("fahtocel");
const ctof = document.getElementById("celtofah");
const output = document.querySelector(".output-box");
const btn = document.querySelector(".btn");
let temp;


function convert() {
    if (ftoc.checked) {
        temp = Number(userInput.value);
        temp = (temp - 32) * (5 / 9);
        output.textContent = temp.toFixed(1) + `\u00B0` + `C`;
    } else if (ctof.checked) {
        temp = Number(userInput.value);
        temp = temp * 9 / 5 + 32;
        output.textContent = temp.toFixed(1) + `\u00B0` + `F`;
    } else {
        output.textContent = "Select a unit";
    }
}