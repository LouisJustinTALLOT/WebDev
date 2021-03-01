// script for the calculator

let expression = "";
let is_displayed_main = "";
let is_displayed_secondary = "";

let operators_list = ['+', '-', '×', '/'];

function trouver_dernier_nombre(str) {
    let res = "";
    let car_etudie;
    for (let i = 1; i < str.length; i++) {
        if (i == 1) {
            car_etudie = str.slice(-1);
        } else {
            car_etudie = str.slice(-i, -i + 1);
        }
        if (operators_list.includes(car_etudie)) {
            break;
        } else {
            res = car_etudie + res
        }
    }
    return res;
}

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

function add_dot() {

    let plus_grande_tranche_que_des_chiffres = "";

    if (!plus_grande_tranche_que_des_chiffres.includes('.')) {
        if (is_displayed_main) {
            if (operators_list.includes(is_displayed_main.slice(-1))) {
                is_displayed_main += "0.";

            } else {
                is_displayed_main += '.';
            }
        } else {
            is_displayed_main = "0.";
        }
    }
    update_display(is_displayed_main);
}

function add_operator(str_operator) {
    if (is_displayed_main == '-') {
        return;
    }

    if (!is_displayed_main) {
        if (str_operator == '-') {
            is_displayed_main += '-';
        }
        update_display(is_displayed_main);
        return;
    }

    if (is_displayed_main.length >= 2 && operators_list.includes(is_displayed_main.slice(-1)) && operators_list.includes(is_displayed_main.slice(-2, -1))) {
        console.log('ici');
        return;
    }

    if (operators_list.includes(is_displayed_main.slice(-1))) {
        if (is_displayed_main.slice(-1) == "+" || is_displayed_main.slice(-1) == '-') {
            // on remplace 
            is_displayed_main = is_displayed_main.slice(0, -1);
            is_displayed_main += str_operator;
            update_display(is_displayed_main);
            return;
        }
        if (is_displayed_main.slice(-1) == '×' || is_displayed_main.slice(-1) == '/') {
            // si c'est un moins on l'ajoute sinon on remplace
            if (str_operator == '-') { //on ajoute
                is_displayed_main += str_operator;
                update_display(is_displayed_main);
                return;
            }
            else {
                // on remplace 
                is_displayed_main = is_displayed_main.slice(0, -1);
                is_displayed_main += str_operator;
                update_display(is_displayed_main);
                return;
            }
        }
    }

    is_displayed_main += str_operator;
    update_display(is_displayed_main);
    return;
}
