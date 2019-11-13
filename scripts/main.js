console.log('Welcome To Heaing Aids Chesapeake');

$(document).ready(function(){
    $(".dropdown, .btn-group").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
        else(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});   

$(document).ready(function(){
    $(".dropdown, .btn-group").onClick(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
        else(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("close");
        }
    });
});    
