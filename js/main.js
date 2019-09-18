$(document).ready(function () {
    //nav
    $('.burger-menu').click(function () { 
        $('#bur_menu').addClass('active')
    });
    $('.close_btn').click(function () { 
        $('#bur_menu').removeClass('active')
    });
    $('.burger_menu a').click(function () { 
        $('#bur_menu').removeClass('active')
    });
});