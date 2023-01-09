$(document).ready(function () {
  let ht = $(window).height();

  $("section").height(ht);
  $(window).resize(function () {
    let ht = $(this).height();

    $("section").height(ht);
  });

  $("header li").click(function () {
    let i = $(this).index();
    let ht = $(window).height();
    let oht = $("section").eq(i).offset().top;
    $("header li").removeClass("on");
    $(this).addClass("on");

    $("html,body")
      .stop()
      .animate({ scrollTop: ht * i }, 1400);
    $("section").eq(i).text(oht);
  });

  // 마우스에서 휘을 올렸을때 내렸을때, 움직인다.
  // $(window).mousewheel(function(event,delta){
  //     if(delta>0){
  //     // 마우스를 올렸을때
  //     $('section').text('마우스를 올렸습니다.')
  //     }else if (delta<0){
  //         $('section').text('마우스를 내렸습니다.') }
  // })

  // 마우스 휠을 올렸을때, 마우스 휠을 내렸을때 화면이 바뀌어라.
  $("section").mousewheel(function (event, delta) {
    // 마우스를 올렸을때
    if (delta > 0) {
      let prev = $(this).prev().offset().top;
      $("html,body").stop().animate({ scrollTop: prev }, 1400);
    } else if (delta < 0) {
      //    다음페이지로이동
      let next = $(this).next().offset().top;
      $("html,body").stop().animate({ scrollTop: next }, 1400);
    }
  });

    // 스크롤바의 위치값 찾아내기
  $(window).scroll(function () {
    let sc = $(this).scrollTop();
    $("h1").text(sc);

    let ht = $(window).height();

    // if (sc >= 0 && sc < ht * 1) {
    //   $("header li").removeClass("on");
    //   $("header li").eq(0).addClass("on");
    // }

    // if (sc >= ht * 1 && sc < ht * 2) {
    //     $("header li").removeClass("on");
    //     $("header li").eq(1).addClass("on");
    //   }

    //   if (sc >= ht * 2 && sc < ht * 3) {
    //     $("header li").removeClass("on");
    //     $("header li").eq(2).addClass("on");
    //   }

    //   if (sc >= ht * 3 && sc < ht * 4) {
    //     $("header li").removeClass("on");
    //     $("header li").eq(3).addClass("on");
    //   }
      
    //   if (sc >= ht * 4 && sc < ht * 5) {
    //     $("header li").removeClass("on");
    //     $("header li").eq(4).addClass("on");
    //   }

    //   if (sc >= ht * 5 && sc < ht * 6) {
    //     $("header li").removeClass("on");
    //     $("header li").eq(5).addClass("on");
    //   }

    //   if (sc >= ht * 6 && sc < ht * 7) {
    //     $("header li").removeClass("on");
    //     $("header li").eq(6).addClass("on");
    //   }

    //   if (sc >= ht * 7 && sc < ht * 8) {
    //     $("header li").removeClass("on");
    //     $("header li").eq(7).addClass("on");
    //   }

    //   if (sc >= ht * 8 && sc < ht * 9) {
    //     $("header li").removeClass("on");
    //     $("header li").eq(8).addClass("on");
    //   }

// 박복문 설정
for(var ab=0; ab<9; ab++){
    if(sc>=ht*ab && sc<ht*(ab+1)){
    $('header li').removeClass('on')
      $('header li').eq(ab).addClass('on')
    }
  
    
  }

  });
});
