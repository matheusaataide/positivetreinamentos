new WOW().init();

$(function(){
    if ($(document).scrollTop() > 30) {
        $('.navbar').addClass('navbar-shrink');
    }

    $('[data-toggle="tooltip"]').tooltip();
});

$(window).scroll(function(){
    if($(document).scrollTop() > 30) {
        $('.navbar').addClass('navbar-shrink');
        $('#header_nav').stop().animate({ height:'40px' }, 600);
    } else {
        $('.navbar').removeClass('navbar-shrink');
        $('#header_nav').stop().animate({ height:'100px' }, 600);
    }  
});
$(document).ready(function(){
    


var form = $('#form-contato'),
    submit = $("#submit");

});

$('.animated .count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
    console.log('ok')
});

$('.navbar .nav-link').click(function() {
    $('.eventos .card.open').removeClass('open');
    $('.navbar-collapse').removeClass('show');
});
$('.eventos .ler-mais').click(function (e) {
    e.preventDefault();
    $(this).closest('.card').addClass('open');
});
$('.eventos .voltar').click(function (e) {
    e.preventDefault();
    $(this).closest('.card').removeClass('open');
});