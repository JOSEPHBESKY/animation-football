
function startad() {
    setTimeout(function () {
        document.getElementById('img1').style.transform='translateY(2px)';
        document.getElementById('img1').style.transition='all 0.5s';
        document.getElementById('img2').style.transform='translateY(2px)';
        document.getElementById('img2').style.transition='all 0.5s';
        document.getElementById('date').style.opacity=1;
        document.getElementById('date').style.transition='all 2s';
        document.getElementById('vs').style.opacity=1;
        document.getElementById('vs').style.transition='all 2s';
       
    },500)
    setTimeout(function () {
        document.getElementById('text1').style.transition='all 0.3s';
        document.getElementById('text1').style.transform='translatex(267px)';
        document.getElementById('text1').style.opacity = 1;
        document.getElementById('text2').style.transition='all 0.3s';
        document.getElementById('text2').style.transform='translatex(-268px)';
        document.getElementById('text2').style.opacity = 1;
    },1000)
    setTimeout(function () {
        document.getElementById('num').style.transition='all 0.3s';
        document.getElementById('num').style.transform='translateX(347px)';
        document.getElementById('num').style.opacity=1;
        document.getElementById('num2').style.transition='all 0.3s';
        document.getElementById('num2').style.transform='scale(1)';
        document.getElementById('num2').style.opacity=1;
    },1000)  
    setTimeout(function () {
        document.getElementById('img3').style.transition='all 0.1s';
        document.getElementById('img3').style.transform='translateY(77px)';
        document.getElementById('img4').style.transition='all 0.1s';
        document.getElementById('img4').style.transform='translateY(85px)';
       
    },1300)
    setTimeout(function () {
        document.getElementById('btn').style.transform='scale(1)';
        document.getElementById('btn').style.transition="all 0.1s";
        document.getElementById('text3').style.opacity=1;
         document.getElementById('text3').style.transform='translateY(-64px)';
         document.getElementById('text3').style.transition='all 0.2s';

    } ,1500)
    setTimeout(function(){
        document.getElementById('img1').style.transition="all 0.1s";
        document.getElementById('img1').style.opacity='0';
        document.getElementById('img2').style.transition="all 0.1s";
        document.getElementById('img2').style.opacity='0';
        document.getElementById('date').style.transition="all 0.1s";
        document.getElementById('date').style.opacity='0';
        document.getElementById('vs').style.transition="all 0.1s";
        document.getElementById('vs').style.opacity='0';
        document.getElementById('text1').style.transition="all 0.1s";
        document.getElementById('text1').style.opacity='0';
        document.getElementById('text2').style.transition="all 0.1s";
        document.getElementById('text2').style.opacity='0';
        document.getElementById('text3').style.transition="all 0.1s";
        document.getElementById('text3').style.opacity='0';
        document.getElementById('num').style.transition="all 0.1s";
        document.getElementById('num').style.opacity='0';
        document.getElementById('num2').style.transition="all 0.1s";
        document.getElementById('num2').style.opacity='0';
        document.getElementById('img3').style.transition="all 0.1s";
        document.getElementById('img3').style.opacity='0';
        document.getElementById('img4').style.transition="all 0.1s";
        document.getElementById('img4').style.opacity='0';
        document.getElementById('btn').style.transition="all 0.1s";
        document.getElementById('btn').style.opacity='0';
    }, 4800);

    // 2frame ;
    setTimeout(function () {
        document.getElementById('img5').style.transition='all 0.3s';
        document.getElementById('img5').style.transform='translateY(0px)';
        document.getElementById('img6').style.transition='all 0.3s';
        document.getElementById('img6').style.transform='translateY(0px)';
        document.getElementById('date2').style.opacity=1;
        document.getElementById('date2').style.transition='all 2s';
        document.getElementById('vs2').style.opacity=1;
        document.getElementById('vs2').style.transition='all 2s';
    },5500)
}
window.load=startad()