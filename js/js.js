$(function(){
    let num = 0;
    let idx = 0;
    let delta;
    const mainImg = document.querySelector(".photozone");
    const topTxt = document.querySelector(".topTxt");
    const subTxt = document.querySelector(".txtBox");
    const scroll = document.querySelector(".scroll-downs");
    const menuBtn = document.querySelector(".menuBtn");
    const mainTit = document.querySelector(".main_tit01");
    const elMainCon = document.querySelectorAll(".main-page");
    
    $(window).on('mousewheel DOMMouseScroll', function (e) {
        delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -1;
        if (delta < 0) {
            if (!(num == 12)) {
                num++;
                if (num <= 11) {
                    mainImg.style = `width:${(num * 5) + 50}vw; height:${(num * 5) + 50}vh;`;
                }
            }
            if ((num == 12) && (idx < elMainCon.length)) {
                idx++;
            }
        } else {
            if (!(idx == 0)) {
                idx--;
            }
            if ((num > 0) && (idx == 0)) {
                num--;
                mainImg.style = `width:${(num * 5) + 10}vw; height:${(num * 5) + 20}vh;`;
            }
        }
        
        if (num >= 10) {
            mainTit.style = `color:#fff;`;
            mainImg.classList.add("on");
            subTxt.classList.add("on");
            topTxt.classList.add("on");
            scroll.classList.add("on");
            $('.menuBtn').addClass("on");
        } else {
            mainTit.style = `color:#000;`;
            mainImg.classList.remove("on");
            subTxt.classList.remove("on");
            topTxt.classList.remove("on");
            scroll.classList.remove("on");
            $('.menuBtn').removeClass("on");
    
        }
    
        $('html,body').stop().animate({
            scrollTop: ($(window).height()) * idx
        }, 600)
    })
    })