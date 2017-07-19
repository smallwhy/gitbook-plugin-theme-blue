/**
 * Created by yan on 2017/7/18.
 */

$(function(){
    //左侧目录折叠/显示
    $(".chapter.active>a").bind("click", function(){
        console.log("折叠菜单点击啦");
        $(this).next("ul.articles").css("display", "none");
    });
});