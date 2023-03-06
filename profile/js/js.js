$(document).ready(function(){

// hover menu

$(".menuBtn").hover(function(){
    $('#work_back').addClass("hover_work");
    $("#intro").addClass("btnHover");
    $("#work").addClass("btnHover");
    $("#about").addClass("btnHover");
    $("#what").addClass("btnHover");
    $("#bodyWrap").addClass("hover_work");
},function(){
    $('#work_back').removeClass("hover_work");
    $("#intro").removeClass("btnHover");
    $("#work").removeClass("btnHover");
    $("#about").removeClass("btnHover");
    $("#what").removeClass("btnHover");
    $("#bodyWrap").removeClass("hover_work");
});

// -----------------------
$(window).scroll(function(){

let a =$(this).scrollTop();
$("h1").text(a)
$(".work_con").css({"left":-a})



})


})

