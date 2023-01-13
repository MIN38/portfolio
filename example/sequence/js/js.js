$(document).ready(function(){

    let imgs =""

    // for 변수 i
    for(var i = 0; i<200; i++){

        console.log(i);

        // $('h1').text(i);
        
        imgs+="<img src='img/pic"+i+".jpg'>"
        // 대입시킬때 '따옴표' 작은따옴표, 큰따옴표 를 구분지어 내부에 넣을때 짝궁을 잘 찾아주어야함

        $('section').html(imgs)
        // html은 구문을 바꾸겠다는 뜻
        // text는 글씨로 인식하기

    };

    $(window).mousemove(function(e){

        let x = e.pageX ;
        let wd = $(window).width()


        // 계산식: (최대움직인거리 / 내가 움직인 거리)*200
        // 움직인 거리(x값) / 최대거리(=window의 가로값(width))


        // 연산식
        let number =Math.floor((x/wd)*200)

        
        // $('h1').text(number);
        $('section img').hide()
        $('section img').eq(number).show()


    })



})