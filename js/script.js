$(function(){

    const iconMenu   = $('.menu-mobile');
    const menuMobile = $('.menu-mobile ul');

    iconMenu.click(function(){
        menuMobile.slideToggle();
    })
});