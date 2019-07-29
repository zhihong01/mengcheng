/*
* @description: 网站公共脚本
* @author: ishang_pan
* @update: ishang_pan (2018-06-29 15:53)
*/

//tab选项卡1
function isShowIndex(tab_id,div_id,who,num){
  for(var i =0;i < num;i++){
    $('#'+'dt'+who+i).css("display","none");
    $('#'+'sp'+who+i).removeClass();
  }
  $('#' + div_id).css("display","block");
  $('#' + tab_id).addClass("u-active");
}

//tab选项卡2
$(function(){
  $('.tit-switch').children().children("li").not($('.no')).mouseover(function(){
    $(this).addClass('u-active').siblings().removeClass('u-active');
    $(this).parent().parent().siblings('.list-switch').hide().eq($(this).index()).show();
  });
});

//置顶
$(function(){
    var min_height = 200;
    $(window).scroll(function() {
        var st = $(window).scrollTop();
        if (st > min_height) {
            $(".u-gotop").show(200);
        } else {
            $(".u-gotop").hide(200);
        };
    });
    $(".u-gotop,.go_top").click(function(){
        $("html,body").animate({scrollTop:0},1000);
    })
});
//右侧悬浮
$(function(){
	$('.is-toolbar li').hover(function(){
		$(this).addClass('u-active').find('img').show().stop().animate({
	        opacity:1
	    },600);
	},function(){
		$(this).removeClass('u-active').find('img').hide().stop().animate({
	        opacity:0
	    },200);
	})
})
//列表页左侧栏目显示隐藏
$(function(){
    $('.m-listlf h2').click(function(){
        $('.m-listlf ul').toggle(500);
    });
})