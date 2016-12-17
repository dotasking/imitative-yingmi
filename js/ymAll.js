/* 
* @Author: anchen
* @Date:   2016-10-05 15:34:46
* @Last Modified time: 2016-10-10 22:26:17
*/

$(document).ready(function(){

    //切换显示块效果
    $(".detail-text ul li").each(function(index, el) {
        $(".detail-text ul li").click(function() {
            $(this).addClass('current-li').siblings().removeClass('current-li');
            $(".li-div>div").eq($(this).index()).show().siblings().hide();
        });
    });

    ////显示详情块，并执行从屏幕外移入屏幕的动画
    $(".product-what>ul>li").each(function(index, el) {
        $(".product-what>ul>li").click(function(event) {
            $(".product-what .detail-item").eq($(this).index()).show().stop().animate({"left":"0"}, 300);
        });
    });

    //显示详情块，并执行从屏幕外移入屏幕的动画
    $(".cus-intro>ul>li").each(function(index, el) {
        $(".cus-intro>ul>li").click(function(event) {
            $(".customer-who .detail-item").eq($(this).index()).show().stop().animate({"left":"0"}, 300);
        });
    });

    //点击关闭按钮，将执行向屏幕外移出的动画，并隐藏
    $(".close-icon").click(function(event) {
        $(this).parents('.detail-item').stop().animate({"left":"100%"}, 300).hide(30);
    });

    //添加背景图
    $(".cus-intro>ul>li").each(function(index, el) {
        $(this).css('backgroundImage',"url(./img/consumer"+($(this).index()+1)+"-thumbnail.jpg)");
    });

    //鼠标悬停时，下拉动画
    $(".diy-sel").hover(function(event) {
        $(this).children(".options").stop().slideDown(200);
        $(this).children(".re-tanc").css('transform','rotate(180deg)');
    },function(){
        $(this).children(".options").stop().slideUp(200);
        $(this).children(".re-tanc").css('transform','rotate(0deg)');
    });
    
    //点击选择，将选取的内容显示至名称框
    $(".list-sel li").click(function(event) {
        $(this).parent().prev().prev().val($(this).html());
    });

    $(".cb-sel li").click(function(event) {
        var str = "";
        //判断是否选中，改变状态
        if($(this).children("input").prop('checked')){
            //只剩最后一项还要去掉时，弹出提示至少选择一项
            if($(".cb-sel li :checked").length == 1){
                alert("至少选择一项！")
            }else{
                $(this).children("input").prop('checked', false);
            }
        }else{
            $(this).children("input").prop('checked', true);
        }

        //将选取好的项目，显示至名称框中
        $(".cb-sel li :checked").each(function(index, el) {
            str += $(this).val() + ",";
        });
        //去掉句末的逗号
        str = str.substr(0,str.length - 1);
        $(this).parent().prev().prev().val(str);
    });

    //按提交按钮后检查各项填写是否正确
    $(".submit-btn").click(function(event) {
        //获取输入框的value值
        var com_name = $(".apply>form>ul>li>input").eq(0).val();
        var contacts = $(".apply>form>ul>li>input").eq(1).val();
        var phone_num = $(".apply>form>ul>li>input").eq(2).val();
        var email = $(".apply>form>ul>li>input").eq(3).val();
        //判断是否符合规则
        if(com_name.length == 0){
            $(".apply>form>ul>li").eq(0).children('.erro-text').show();
        }else{
            $(".apply>form>ul>li").eq(0).children('.erro-text').hide();
        }
        if(contacts.length == 0){
            $(".apply>form>ul>li").eq(3).children('.erro-text').show();
        }else{
            $(".apply>form>ul>li").eq(3).children('.erro-text').hide();
        }
        if(isNaN(phone_num) || phone_num.length != 11){
            $(".apply>form>ul>li").eq(4).children('.erro-text').show();
        }else{
            $(".apply>form>ul>li").eq(4).children('.erro-text').hide();
        }
        if(email.length == 0){
            $(".apply>form>ul>li").eq(5).children('.erro-text').show();
        }else{
            $(".apply>form>ul>li").eq(5).children('.erro-text').hide();
        }

        if(com_name.length != 0 && contacts.length != 0 && !isNaN(phone_num) && phone_num.length == 11 && email.length != 0){
            alert("提交失败，请重试！");
        }
        
        //阻止按钮默认事件
        event.preventDefault();
        window.event.returnValue = false;
    });

    //当输入框获得焦点时去掉错误提示
    $(".apply>form>ul>li>input").focus(function(event) {
        $(this).next().hide();
    });
});