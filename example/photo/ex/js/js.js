$(document).ready(function(){

// body의 높이 갑과 section의 가로 값 통일 시키기
// article의 갯수를 구하고 article의 가로값을 구해서 두개를 곱한 값 = section의 가로값으로 변환
let a = $('article').size();
let aWd = $('article').width();

// $('h1').text(a);
// 20개 라는 것을 찾아냄

// $('h1').text(aWd);
// 180

// $('h1').text(aWd+20);
// 200

$('section').width(a*(aWd+20));
// 20개 * (180+20)

$('body').height(a*(aWd+20));
// 20개 * (180+20)

$(window).resize(function(){
 // 화면이 리사이즈 될때마다, body의 높이 갑과 section의 가로 값 통일 시키기
// article의 갯수를 구하고 article의 가로값을 구해서 두개를 곱한 값 = section의 가로값으로 변환
let a = $('article').size();
let aWd = $('article').width();

// $('h1').text(a);
// 20개 라는 것을 찾아냄

// $('h1').text(aWd);
// 180

// $('h1').text(aWd+20);
// 200

$('section').width(a*(aWd+20));
// 20개 * (180+20)

$('body').height(a*(aWd+20));
// 20개 * (180+20)

});




    // 화면에서 스크롤바가 움직일때 "상단"의 위치값을 찾아라.
$(window).scroll(function(){
let sc = $(this).scrollTop();
//  위와 아래가 같으면 this(=window)로 대체 할 수 있음

// 로고에 값 나타내기
// $('h1').text(sc);

$('section').stop().animate({'left':-sc},600)
});

// gnb li를 클릭했을때 section이 움직이기
$('.gnb li').click(function(){
    
    let i = $(this).index();
//  this = gnb li

$('html,body').scrollTop(1000*i)




})




})