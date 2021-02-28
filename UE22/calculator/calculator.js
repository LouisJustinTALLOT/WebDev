// script for the calculator

let expression = "";
let is_displayed_main = "";
let is_displayed_secondary

function update_display(string_to_display) {
    let div_display = document.getElementById("display");
    div_display.innerHTML = string_to_display;
}