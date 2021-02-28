// script for the calculator

let expression = "";
let is_displayed_main = "";
let is_displayed_secondary = "";

function update_display(string_to_display) {
    let div_display = document.getElementById("display");
    div_display.innerHTML = string_to_display;
}

function reset() {
    expression = "";
    is_displayed_main = "";
    is_displayed_secondary = "";
    update_display("");
}

function backspace() {
    is_displayed_main = is_displayed_main.slice(0, -1);
    update_display(is_displayed_main);
}

function add_number(car_number) {
    is_displayed_main += car_number;
    update_display(is_displayed_main);
}

