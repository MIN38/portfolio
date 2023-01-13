$(document).ready(function(){

    // 갤러리 이미지 움직임 설정

    // 왼쪽 버튼 클릭시 이미지가 왼쪽으로 이동

    let i = 0
    $('.gallery .left').click (function(){
    if(i<5)i++;
        let gwd = $('.gallery li').width()
    $('.gallery ul').stop().animate({'left':i*-(gwd+5)},200)

    $('.gallery li').removeClass('on')
    $('.gallery li').eq(i).addClass('on')
    $('.gallery li').eq(i-1).stop().animate({'opacity':0},100)
})
// 오른쪽 버튼을 클릭시 이미지가 오른쪽으로 이동;

    $('.gallery .right').click (function(){
    if(i>0)i--;
        let gwd = $('.gallery li').width()
    $('.gallery ul').stop().animate({'left':i*-(gwd+5)},200)

    $('.gallery li').removeClass('on')
    $('.gallery li').eq(i).addClass('on')
    $('.gallery li').eq(i).stop().animate({'opacity':1},100)

    // 위치는 거의 변화 없음 변해야하는게 무엇인지 확인하기
})

    // 리뷰의 박스 움직임 설정
    // 왼쪽 버튼 클릭시 박스가 왼쪽으로 이동

    let a = 0
    $('.review .left').click(function(){
     if(a<2)a++;
     let con = $('.review .conBox li').width()
        $('.review .conBox ul').stop().animate({'left':a*-(con+2)},200)
        $('.review .conBox li').removeClass('on')
        $('.review .conBox li').eq(a).addClass('on')
        $('.review .conBox li').eq(a-1).stop().animate({'opacity':0},100)


    })
    // 오른쪽 버튼을 클릭시 이미지가 오른족으로 이동
    $('.review .right').click(function(){
        if(a>0)a--;
        let con = $('.review .conBox li').width()
           $('.review .conBox ul').stop().animate({'left':a*-(con+2)},200)
           $('.review .conBox li').removeClass('on')
           $('.review .conBox li').eq(a).addClass('on')
           $('.review .conBox li').eq(a).stop().animate({'opacity':1},100)
   
   
       })



})
    
    

