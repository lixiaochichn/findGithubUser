$(function () {


    let pause;

    $('.input').on('keyup', function () {

        clearTimeout(pause);

        pause = setTimeout(function () {
            console.log('aaa');
        }, 300);



    })





})