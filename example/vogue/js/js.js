$(document).ready(function(){
    
    // 제이쿼리 선택자는 $(css표기방법)으로 선택함

    // addEventLisner의 경우 이벤트와 함수의 조합으로 표현 

// // 1번
// $('#gnb li:nth-child(1)').click(function(){
//     // 모든 sectin의 div의 클래스명의 on 값을 지워라.
//     $('section>div').removeClass('on');
//     // section의 div 중 1번째 아이에게 class명에 on값을 더해 주어라.
//     $('section>div:nth-child(1)').addClass('on');
//     $('nav').removeClass('on');
// $('section').removeClass('on');
// $('.btnMenu').fadeIn()
//     })

// // 2번
// $('#gnb li:nth-child(2)').click(function(){
//     // 모든 sectin의 div의 클래스명의 on 값을 지워라.
//     $('section>div').removeClass('on');
//     // section의 div 중 2번째 아이에게 class명에 on값을 더해 주어라.
//     $('section>div:nth-child(2)').addClass('on');
//     $('nav').removeClass('on');
// $('section').removeClass('on');
// $('.btnMenu').fadeIn()
//     })

// // 3번
// $('#gnb li:nth-child(3)').click(function(){
// // 모든 sectin의 div의 클래스명의 on 값을 지워라.
// $('section>div').removeClass('on');
// // section의 div 중 3번째 아이에게 class명에 on값을 더해 주어라.
// $('section>div:nth-child(3)').addClass('on');
// $('nav').removeClass('on');
// $('section').removeClass('on');
// $('.btnMenu').fadeIn()
// })

// 위의 함수 축약하기
$('#gnb li').click(function(){

    let i =$(this).index()
    $('section>div').removeClass('on');
    $('section>div').eq(i).addClass('on');
    $('nav').removeClass('on');
$('section').removeClass('on');
$('.btnMenu').fadeIn()
})


// btn을 클릭했을때 nav가 왼쪽기준으로 오른쪽이 열리고 section은 오론쪽을 기준으로 왼쪽이 열린다.
$('.btnMenu').click(function(){

    // $('nav').css({'transform': 'rotateY(15deg)'});
    // $('section').css({'transform': 'rotateY(-10deg)'});

    $('nav').addClass('on');
    $('section').addClass('on');
    $(this).fadeOut()
})











})