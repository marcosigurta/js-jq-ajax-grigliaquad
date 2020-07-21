// GOAL:
// Griglia 6x6, ad ogni click parte una
// richiesta AJAX che prende un
// numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro
// del quadrato
// (vedi una slide di oggi)
function addSquare() {

    for (var i = 0; i < 36; i++) {
        var square = $('#template .square').clone();
    var target = $('#wrapper');
        target.append(square);
    }
};

//Click on square 

function addEventClickSquare() {
   
    var target = $('.square');
    target.addClass('default');
    target.click(addAjaxCall);


};

//function on click
function addAjaxCall() {
    
    var target = $(this);
    
    target.html('');

    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=9&items=1',
        method: 'GET',
        success: function (data, state) {

            var success = data['success'];
            var value = data['response'];
            var valueMin = value <= 5;
            var valueMax = value > 5;
            console.log(value);

            if (success) {
                if (valueMin && !valueMax) {
                    target.addClass('yellow');
                    target.append(value);
                } else {
                    target.removeClass('yellow').addClass('green');
                    target.append(value);
                }
            } else {
                alert('Error');
            }
        },
        error: function (request, state, error) {
            console.log('request', request);
            console.log('state', state);
            console.log('error', error);
        }
    });
}

function init() {
    addSquare();
    addEventClickSquare();
};

$(document).ready(init);
