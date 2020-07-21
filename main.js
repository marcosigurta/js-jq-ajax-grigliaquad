// GOAL:
// Griglia 6x6, ad ogni click parte una
// richiesta AJAX che prende un
// numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro
// del quadrato
// (vedi una slide di oggi)


//Click on square 

function addEventClickSquare() {
    var target = $('.square');
    target.click(addAjaxCall);
}

//function on click
function addAjaxCall() {
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=9&items=1',
        method: 'GET',
        success: function (data, state) {
            var success = data['success'];
            var value = data['response'];
            var valueMin = value <= 5;
            console.log(value);

            if (success) {
                if (valueMin) {
                    $('.square').addClass('yellow');
                    $('.square').append(value);
                } else {
                    $('.square').removeClass('yellow').addClass('green');
                    $('.square').append(value);
                }
            }
        }
    })
}


function init() {
    addEventClickSquare();
}

$(document).ready(init);
