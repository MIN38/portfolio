$(document).ready(function(){

    // search를 눌렀을때 

    $('.search a').click(function(){

        $('.search').animate({'width':'160px'},800,function(){

            $('.search').find('input').stop().animate({'opacity':1},200)
        })

    });



    // 메뉴를 호버했을때 sub_menu가 보여라.

    $('.gnb li').mouseenter(function(){
        let i = $(this).index()
        console. log(i)
        $('.sub_menu>div').slideUp()
        $('.sub'+(i+1)).slideDown()
    });

    $('header').mouseleave(function(){
        $('.sub_menu>div').slideUp()
    });































})