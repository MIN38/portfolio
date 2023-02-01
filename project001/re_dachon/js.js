$(document).ready(function(){

// 비디오 자동 슬라이드
let tt = 0
setInterval(function(){

    if(tt<4){
        tt++;
        $('.slideVideo li').removeClass('on');
        $('.slideVideo li').eq(tt).addClass('on');

        $('.s_title li').removeClass('on');
        $('.s_title li').eq(tt).addClass('on');

        $('.numberbtn li').removeClass('on');
        $('.numberbtn li').eq(tt).addClass('on');
    }

    if(tt==3) {tt = -1};

},8000)


    // 숫자 클릭 시 비디오 전환

    $('.numberbtn li').click(function(){

        let i = $(this).index();

        $('.slideVideo li').removeClass('on');
        $('.slideVideo li').eq(i).addClass('on');

        $('.s_title li').removeClass('on');
        $('.s_title li').eq(i).addClass('on');

        $('.numberbtn li').removeClass('on');
        $('.numberbtn li').eq(i).addClass('on');

    })

    // 마우스 올리면 멈추고, 떼면 다시 시작하기
    $('.numberbtn').mouseenter(function(){
        clearInterval(setIntervalId);
    })
    $('.numberbtn').mouseleave(function(){
        setIntervalId = setInterval(move,3000);
    })

    // search를 눌렀을때 

    $('.search ').click(function(){

        $('.search ').animate({'width':'40px'},200,function(){

            $('.search ').find('input').stop().animate({'opacity':1},600)
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



// .activity 설정-----------------------------------------------

// 마우스를 .a_imgBox .a_slide에 마우스가 올라갔을 때 .on 값을 받아라.
$(".a_imgBox .a_slide li").click(function(){

    let as = $(this).index();
    console.log(as);

    $(".a_slide li").removeClass("on")
    $(".a_slide li").eq(as).addClass("on")

})


// 사이드 고정바--------------------------------------------------

// 포토스팟 설정
$(window).scroll(function(){


    let sc= $(this).scrollTop();
    // $('header .logo').text(sc);

    if(sc>=700){
        $('.sf_photo').css({'opacity':1})
    }
    
    if(sc<700){
        $('.sf_photo').css({'opacity':0})
    }
    
    if(sc>=4100){
        $('.sf_photo').css({'opacity':0})
    }

})

// TOP 버튼 설정-----------------------------------------------------------
$(window).scroll(function(){

    let sc= $(this).scrollTop();

    if(sc>=700){
        $('.sf_top').css({'opacity':1})
    }

    if(sc<700){
        $('.sf_top').css({'opacity':0})
    }

})

// TOP 버튼 누르면 맨 위로 가기
$('.sf_top').click(function(){
    $('html,body').animate({scrollTop:0},1000)
})

// theme---------------------------------------------------------------------

$(".theme_cont li").click(function(){
    let a = $(this).index();
    console.log(a);
    $(".theme_cont li").removeClass('on');
    $(".theme_cont li").eq(a).addClass('on');
    $(".theme_img li").removeClass('on');
    $(".theme_img li").eq(a).addClass('on');

})

    // food section ==============================================
   // food_imgBox  슬라이드 구현

    // trailer ------------------------------------------------------------
    // .btn_right를 누르면 #trailer가
    // 왼쪽으로 420px씩 움직인다. 총 6개 사진

    let fs = 0

    $('.btn_right01').click(function(){
        if(fs<3){ 
            fs++;
            console.log(fs);
            $('#trailer').css({'left':-420*fs+'px'});
        }
    })
    $('.btn_left01').click(function(){
        if(fs>0){ 
            fs--;
            console.log(fs);
            $('#trailer').css({'left':-420*fs+'px'});
        }
    })

    $('.food .tabbtn li').click(function(){
        $('#trailer').animate({scrollTop:0},)
    })
//    trailer01 ------------------------------------------------------------
    let fd = 0

    $('.btn_right02').click(function(){
        if(fd<3){ 
            fd++;
            console.log(fd);
            $('#trailer01').css({'left':-420*fd+'px'});
        }
    })
    $('.btn_left02').click(function(){
        if(fd>0){ 
            fd--;
            console.log(fd);
            $('#trailer01').css({'left':-420*fd+'px'});
        }
    })




// food의 카페, 식당 버튼 클릭시 사진 변경
    $('.food .tabbtn li').click(function(){
        let ft = $(this).index();
        console.log(ft);

        $('#trailer').css({'left':0});
        $('#trailer01').css({'left':0});
        
        $('.food .tabbtn li').removeClass('on');
        $('.food .tabbtn li').eq(ft).addClass('on');

        $('.food_imgBox .tab ul').removeClass('on');
        $('.food_imgBox .tab ul').eq(ft).addClass('on');

        $('.food_btn_box li').removeClass('on');
        $('.food_btn_box li').eq(ft).addClass('on');
    })

    // news --------------------------------------------------

    // vanner 무한 슬라이드

    const eventImg = $('.vanner .slideImg li');
    const eventBtn = $('.vanner_btn li');
    let setIntervalId;
    let m = 0;

    // vanner 버튼 클릭 시 순서에 맞게 배너 움직이기
    $('.vanner_btn li').click(function(){
        $('.vanner_btn li').removeClass('on'); 
        $(this).addClass('on'); // 버튼 변형

        // 배너이미지 움직이기
        let i = $(this).index();
        eventImg.eq(i-2).css({'left':'-100%'}).stop().animate({'left':'-200%'});
        eventImg.eq(i-1).css({'left':'0'}).stop().animate({'left':'-100%'});
        eventImg.eq(i).css({'left':'100%'}).stop().animate({'left':'0%'});
    })
        

    setIntervalId = setInterval(move,3000);
    function move(){
        m++;
        if (m == 3){m = 0;};
        eventBtn.eq(m-1).trigger('click');
    }

    // 마우스 올리면 멈추고, 떼면 다시 시작하기
    $('.vanner').mouseenter(function(){
        clearInterval(setIntervalId);
    })
    $('.vanner').mouseleave(function(){
        setIntervalId = setInterval(move,3000);
    })


    // 스크롤바가 일정거리만큼 이동했을때 promotionimg/ txt 가 움직여라. 
    // left:0 / right:0으로 

    $(window).scroll(function(){

        let sc= $(this).scrollTop()
        // $('.logo').text(sc);
        if(sc>=845 && sc>1200){

            $('.newsImg .leftTop').stop().animate({'left':'-500px','top':'-500px'},1500)
            $('.newsImg .rightBotoom').stop().animate({'right':'-500px','top':'500px'},1500)
        }
        else{
            $('.newsImg .leftTop').stop().animate({'left':'-100%'},1500)
            $('.newsImg .rightBotoom').stop().animate({'right':'-100%'},1500)
        }
    });



    // mapbtn을 클릭했을때 mapBox를 addClass를 해라. 
        $('.mapbtn').click(function(){

            $(this).parent().addClass('on')

    });



// 스크롤을 4000보다 올렸을때 mapBox가 다시 나타나게 해라--------------------------------------------------------
$(window).scroll(function(){

    let sc= $(this).scrollTop();

    if(sc<4000){
        $('.mapbtn').parent().removeClass('on')
    }

})



























})