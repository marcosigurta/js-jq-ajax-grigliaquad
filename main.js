function reset() {
    var btnReset = $('#btn');
    var target = $('.square')
    btnReset.click(function(){
        target.addClass('click').addClass('default').removeClass('yellow').removeClass('green');
        target.html('');
    })
}

function addSquare() {

    for (var i = 0; i < 36; i++) {
        var square = $('#template .square').clone();
    var target = $('#wrapper');
        target.append(square);
    }
};

function addEventClickSquare() {
        var target = $('.square');
        target.addClass('default').addClass('click');
        target.click(addAjaxCall);
        oneclick = false;
};

function addAjaxCall() {

    var target = $(this);
   
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=9&items=1',
        method: 'GET',
        success: function (data, state) {

            var success = data['success'];
            var value = data['response'];
            var valueMin = value <= 5;
            console.log(value);

            if (success) {
                if (valueMin && target.hasClass('click')) {
                    target.addClass('yellow').removeClass('click');
                    target.append(value);
                } else if (!valueMin && target.hasClass('click')){
                    target.removeClass('yellow').removeClass('click').addClass('green');
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
    reset()
};

$(document).ready(init);
