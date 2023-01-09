$(document).ready(function(){

    // 실행문

    // 시간정보 찾기

    


    setInterval(function(){
        let now =new Date();
        // now는 변수 내가 바꿔도 되는 것
        let hr = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        
        // $('h1').text(sec) : console 대신 잘 확이되는지 확인한 것
    
        let hNum;
        let mNum;
        let sNum;

        if(sec>=10){

            sNum =sec
        }else{
            sNum= '0'+sec
        };



        if(min>=10){
            mNum =min
        }else{
            mNum= '0'+min
        };


        if(hr>=10){
            hNum =hr
        }else{
            hNum= '0'+hr
        };
        


        $('.phone span').eq(0).text(hNum);
        $('.phone span').eq(1).text(mNum);
        $('.phone span').eq(2).text(sNum);
        // nth cihld 1번이 eq 0:순서


// 자동으로 30분이 되면 night로 바뀌게 하는 방법
// if(min>=30){
//     $('#wrap').removeClass() 
//         $('#wrap').addClass('night')
// }

    },1000);



    // $('nav li').eq(1).click(function(){
//     $('#wrap').addClass('on')
// })




    $('nav li').click(function(){
        
        let txt= $(this).text()
        console.log(txt)

        $('#wrap').removeClass()
        // ()안에 내용을 안썼다. class를 만들어서 wrap을쓰면 그 Class도 다 지우기 때문에 id로 만들어야한다. 

        $('#wrap').addClass(txt)




        })






})