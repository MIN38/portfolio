$(document).ready(function () {
    // 브라우저의 높이값 찾기
    let ht = $(window).height();
    console.log(ht)
    // 연습용: gnb의 높이를 찾아라
    console.log($('#gnb').height())
    // 연습용: gnb의 가로값을 찾아라
    console.log($('#gnb').width())
  
    $('section').height(ht)
    // 브라우저가 리사이즈 될 때마다, 브라우저의 높이를 찾아서
    // 섹션의 높이값이 대입해라
    $(window).resize(function () {
      ht = $(window).height();
      $('section').height(ht);
    })
    // 마우스 움직임 찾아내기
    // section에서 마우스가 움직였을 때, 이미지의 위치값을 바꿔라
    $('section').mousemove(function (e) {
      let posx = e.pageX;
      let posy = e.pageY;
      $('.box h2').eq(0).text(posx);
      $('.box h2').eq(1).text(posy);
  
      $('.p11').css({
        'right': 20 - (posx / 30),
        'bottom': 20 - (posy / 30)
      })
      $('.p12').css({
        'right': 130 + (posx / 30),
        'bottom': -40 + (posy / 30)
      })
      $('.p13').css({
        'right': 60 - (posx / 30),
        'top': 180 - (posy / 30)
      })
      $('.p21').css({
        'right': -180 - (posx / 20),
        'bottom': -280 - (posy / 20)
      })
      $('.p22').css({
        'right': -40 + (posx / 60),
        'bottom': -120 + (posy / 60)
      })
      $('.p31').css({
        'right': 180 - (posx / 30),
        'bottom': 30 - (posy / 30)
      })
      $('.p32').css({
        'right': 110 + (posx / 30),
        'bottom': -270 + (posy / 30)
      })
      $('.p33').css({
        'right': -70 - (posx / 30),
        'bottom': -130 - (posy / 30)
      })
      $('.p41').css({
        'right': 20 - (posx / 30),
        'bottom': -120 - (posy / 30)
      })
      $('.p42').css({
        'right': -(posx / 30),
        'bottom': -180 - (posy / 30)
      })
    })
  



    // 스크롤바의 위치값 찾아내기

$(window).scroll(function(){


  let sc = $(this).scrollTop();
  $('h1').text(sc)
// 애니메이트 작성법 . animate({속성명:속성값},지속시간);

let ht = $(window).height();

// if(sc>=0 && sc <ht*1){
//   $('#gnb li').removeClass('on')
//   $('#gnb li').eq(0).addClass('on')
// }

// if(sc>=ht*1 && sc <ht*2){
//   $('#gnb li').removeClass('on')
//   $('#gnb li').eq(1).addClass('on')
// }

// if(sc>=ht*2 && sc <ht*3){
//   $('#gnb li').removeClass('on')
//   $('#gnb li').eq(2).addClass('on')
// }

// if(sc>=ht*3 && sc <ht*4){
//   $('#gnb li').removeClass('on')
//   $('#gnb li').eq(3).addClass('on')
// }

// 작거나 같으면도 가능함 

// 박복문 설정
for(var ab=0; ab<5; ab++){
  if(sc>=ht*ab && sc<ht*(ab+1)){
  $('#gnb li').removeClass('on')
    $('#gnb li').eq(ab).addClass('on')
  }

  
}





});
// li를 클릭했을때, scrollTop을 해당 높이로 가게 만들어라.
// $('#gnb li').eq(3).click(function(){
  // 세번째 눌렀을때만 ↑
  $('#gnb li').click(function(){

// 클릭했을때 나의 순번 찾기
let i =$(this).index();
// 각각의 높이값 찾기 : ht
// 첫번째 꺼 i= 0, i=1, i=2, i=3

let ht =  $(window).height();

// 클릭했을때 나에게 클래스 on값을 붙여라.
$('#gnb li').removeClass('on')
$(this).addClass('on')

$('html, body').stop().animate({'scrollTop':ht*i},1400,'easeOutBounce')

  // $('html, body').animate({'scrollTop':'2811px'},1400,'easeOutBounce')
  // 화면전체(소스 모두 다)
  // window라고 안쓰는 이유는 창의 넓이 높이여서
  // 1000분의 1초
  // scroll탑은 css로 못하고 js로 해야함
  // 참고 사이트: https://superkts.com/jquery/@easingEffects
})

// h1에 마우스가 들어갔을때 나의 위치값을 찾아라.
$('h1').mouseenter(function(){

  let abc = $(this).offset().top
  alert(abc)
})

// 마우스 휠을 올렸을때, 마우스 휠을 내렸을때 화면이 바뀌어라.
    $('section').mousewheel(function(event,delta){

      // 마우스를 올렸을 때 
      if(delta>0){
        // 이전페이지로 이동
        // 올렸을때

        let prev = $(this).prev().offset().top;
        // $('html, body').animate({'scrollTop':prev},1400,'easeOutBounce')
 $('html,body').stop().animate({'scrollTop':prev},1400)

 // 마우스르 내렸을때

      }else if (delta<0){
        // 다음페이지로 이동
       
        let next = $(this).next().offset().top;
        $('html,body').stop().animate({'scrollTop':next},1400)
      }
    })







  })