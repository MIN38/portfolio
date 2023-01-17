$(document).ready(function(){

    // search를 눌렀을때 

    $('.search a').click(function(){

        $('.search').animate({'width':'160px'},800,function(){

            $('.search').find('input').stop().animate({'opacity':1},200)
        })

    });
})