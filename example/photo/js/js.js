$(document).ready(function(){

    // body 높이값과 section의 가로값 통일 시키기
    // article의 갯수를 구하고 article의 가로값을 구해서 두개를 곱한 값 = section의 가로값으로 변환
    let a = $('article').size();
    let aWd = $('article').width()
    // $('h1').text(a);
    // 20개라는것을 찾아냄
    // $('h1').text(awd)
    // 180개가 나옴
    // $('h1').text(awd+20)
    // 200이 나옴
    
    $('section').width(a*((aWd+20)+600));
    $('body').height(a*(aWd+20));

    
    $('html,body').scrollTop(a*(aWd+20));



    $(window).resize(function(){
    
    // 화면이 리사이즈 될때마다, body 높이값과 section의 가로값 통일 시키기
    // article의 갯수를 구하고 article의 가로값을 구해서 두개를 곱한 값 = section의 가로값으로 변환
    let a = $('article').size();
    let aWd = $('article').width()
    // $('h1').text(a);
    // 20개라는것을 찾아냄
    // $('h1').text(awd)
    // 180개가 나옴
    // $('h1').text(awd+20)
    // 200이 나옴
    
    $('section').width(a*((aWd+20)+600));
    $('body').height(a*(aWd+20))


        
    })
    
    
    
        // 화면에서 스크롤바가 움직일때 "상단"의 위치값을 찾아라.
    $(window).scroll(function(){
     let sc = $(window).scrollTop();
    //  위와 아래가 같으면 this로 대체 할 수 있음
    // $('h1').text(sc);
    $('section').stop().animate({'left':-sc},600)
    
    });
    
    
    $('.gnb li').click(function(){
    
        let i = $(this).index();
    
        $('html,body').scrollTop(1000*i)
    
    });
    
    // article을 click했을때 내가 클릭한 그아이에게 addClass를 해라.
    // 모든 article에겐 remoceClass를 먼저해라

    $('article h2').click(function(e){
        e.preventDefault();
        // 기존에 있었던 a의 이벤트값을 없애라.


        // 클릭한 나의 부모자의 순번을 찾아라.

        let id = $(this).parent().index();

        // 클릭한 나의 자손인 'a'의 속성값
        let src = $(this).children('a').attr('href')
        // 내자식 중에 a 를 정확히 부른것
        // attr : 태그안의 속성명

        // alert(src)

        $('article p img').attr({'src':''})


        // 클릭한 나의 형제인 'p'의 자손인 'img'안의 속성명 src 안에 대입해라.
        $(this).siblings('p').children('img').attr({'src':src})
        // 자바스크립트 언어인 변수 대로 넣기


        
        $('article').removeClass('on')


        $(this).parent().addClass('on')


        $('html, body').scrollTop(200*id)

    });
    
    // span을 클릭했을때 article에 removeClass를 해라
    $('article span').click(function(){

        $(this).parent().removeClass('on')

    })

    
    
    })