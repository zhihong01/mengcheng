/*
* @Author: Tech050
* @Date:   2019-06-04 18:00:39
* @Last Modified by:   Tech050
* @Last Modified time: 2019-06-14 19:53:10
*/

//tab选项卡
$(function(){
  $('.tit-switch').children().children("li").not($('.no')).mouseover(function(){
    $(this).addClass('u-active').siblings().removeClass('u-active');
    $(this).parent().parent().siblings('.list-switch').hide().eq($(this).index()).show();
  });
});

//友情连接
$(function(){
	$('.m-links').hover(function(){
		$(this).children('.m-linkbox').show();
		$(this).children('p').addClass('u-active');
	},function(){
		$(this).children('.m-linkbox').hide();
		$(this).children('p').removeClass('u-active');
	})
})


//右侧悬浮
$(function(){
	$(".u-gotop,.u-gotp").click(function(){
        $("html,body").animate({scrollTop:0},1000);
    })
    $(".u-sp01 a,.u-sp03 a,.u-sp04 a").hover(function(){
        $(this).children("img").stop().animate({height: "100px",width: "100px",left: "-100px"});
    },function(){
        $(this).children("img").stop().animate({height: "0",width: "0",left: "0"});
    });
    $('.u-sp05').hover(function(){
    	$(this).children('div').show(500);
    },function(){
    	$(this).children("div").hide(500);
    });
    $('.u-shbtn').click(function(){
    	if($(this).hasClass('a')){
    		$(this).removeClass('a').text('收起');
    		$('.m-suspen ul').toggle(500);
    	}else{
    		$(this).addClass('a').text('展开');
    		$('.m-suspen ul').toggle(500);
    	}
    	
    })
})

var getHost = function(url) {
	var host = "null";
	if (typeof url == "undefined" || null == url) url = window.location.host;
	var regex = /^\/[\w\/]*/;
	var match = url.match(regex);
	if (typeof match != "undefined" && null != match) host = window.location.host;
	return host;
};
$(document).ready(function () {
	$("a").click(function(){
		var o = $(this);
		var url = o.attr('href');
		var host = getHost(url);
		if (host.indexOf("fy.gov.cn") == -1 && url.indexOf("fy.gov.cn") == -1 && url.indexOf("javascript") && url != "#"){
			$(this).attr('target','_self');
			$(this).attr('href','javascript:void(0)');
			var w = '480px';
			var h = '170px';
			if(window.screen.width < 768) { w = '90%'; h = '170px';}
			var cf = layer.confirm('<div style="margin-top:30px; font-size:16px;">您访问的链接即将离开“亳州市政府网站集约化平台站点”，将访问外部链接地址为' + url + '是否继续？</div>', {
				btn:[ '继续访问', '放弃' ],
				title: false,
				shade: 0.7,
				area: [w, h],
				cancel: function(index){ o.attr('href',url); }
			}, function() {
				window.open(url); 
				o.attr('href',url);
				layer.close(cf);
			}, function() {
				o.attr('href',url);
			});
		}
	});
})

//列表页左侧栏目显示隐藏
$(function(){
    $('.m-listlf h2').click(function(){
        $('.m-listlf ul').toggle(500);
    });
})

$(window).scroll(function(){
    if($(window).scrollTop()>=400){
        $(".fx6").show();
    }else{
        $(".fx6").hide();
    }
})
$(".fx6").click(function(){
	$('body,html').animate({scrollTop:0},1000);
	return false;
});


$(".u-shou").click(function(){
   if($(this).next("ul").height()>=375){
	   $(this).css("transform","rotate(180deg)");
	   $(this).next("ul").css({"height":0,"overflow":"hidden"});
   }else{
	   $(this).css("transform","rotate(0deg)");
	   $(this).next("ul").css({"height":"378px","overflow":"visible"})
   }
})
function tab(a,b){
	$(a).hover(function(){
		var i=$(this).index()
		$(b).hide();
		$(b).eq(i).show()
	})
}
tab(".gwy1",".gwy")
tab(".szf1",".szf")
