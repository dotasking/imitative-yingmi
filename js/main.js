/* 
* @Author: pengshuang
* @Date:   2016-09-22 18:44:32
* @Last Modified time: 2016-09-28 21:10:49
*/

$(document).ready(function(){
    
    $(".sub-nav-hover").mouseover(function(){
        $(".sub-nav").show();
    }).mouseout(function(){
        $(".sub-nav").hide();
    });

    $(".sub-nav li a").mouseover(function(){
        $("#prdt-ser").css("background-color","#e98348");
    }).mouseout(function(){
        if($("#prdt-ser").attr("class") == "current"){
            $("#prdt-ser").css("background-color","#ff8348");
        }else{
            $("#prdt-ser").css("background-color","#fd5100");
        }
    });

    $("#prdt-ser").mouseover(function(){
        $(this).css("background-color","#ff8348");
    }).mouseout(function(){
        if($("#prdt-ser").attr("class") == "current"){
            $("#prdt-ser").css("background-color","#ff8348");
        }else{
            $("#prdt-ser").css("background-color","#fd5100");
        }
    });
});