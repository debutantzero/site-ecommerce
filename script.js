window.addEventListener("scroll", function(){
    var blocque_menu= document.querySelector("#menu");
    blocque_menu.classList.toggle("blokmenu" , window.scrollY > blocque_menu.scrollHeight);
});


window.addEventListener("scroll", function(){
    var color_menu= document.querySelector("#menu");
    var promo= document.querySelector("#promo");
    color_menu.classList.toggle("color-menu" , window.scrollY > promo.scrollHeight);
});


window.addEventListener("scroll", function(){
    var color_menu_rouge= document.querySelector("#menu");
    color_menu_rouge.classList.toggle("color-menu-rouge" , window.scrollY > promo.scrollHeight*2.85);
});


