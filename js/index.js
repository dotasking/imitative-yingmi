/* 
* @Author: pengshuang
* @Date:   2016-09-23 14:47:43
* @Last Modified time: 2016-09-29 16:44:10
*/

$(document).ready(function(){
    var flag = true;
    var timer;
    var listbtns = $(".picbtn ul").children(); 
    
    for(var i=0;i<listbtns.length;i++){
        listbtns[i].onclick = function(){
            showbtn(this.getAttribute("index"));
        }
    }

    function showbtn(index){
        for(var i=0;i<listbtns.length;i++){
            if(listbtns[i].getAttribute("index")==index){
                listbtns[i].className = "on";
                animated(parseInt(index));
            }else{
                listbtns[i].className = "";
            }
        }
    }

    function animated(index){
        if(index == 1){
            setTimeout("$('.pic2').css('display','none');", 1000);
            $(".pic2").css({"animation":"fade 1s","z-index":"1"});
            $(".pic1").css({"animation":"scale 3s","display":"block","z-index":"0"});
        }else{
            setTimeout("$('.pic1').css('display','none');", 1000);
            $(".pic1").css({"animation":"fade 1s","z-index":"1"});
            $(".pic2").css({"display":"block","animation":"scale 3s","z-index":"0"});
        }
    }

    function autoplay(){
        if(flag){
            flag = false;
            console.log(1);
            return 1;
        }else{
            flag = true;
            console.log(2);
            return 2;
        }
    }

    
    function play(){
        timer = setInterval(function(){
            showbtn(autoplay());
        }, 3500);
    }
    
    function stop(){
        clearInterval(timer);
    }

    $(".pic1,.pic2").mouseover(function(){
        stop();
    }).mouseout(function(){
        play();
    });
    showbtn(autoplay());
    play();
});