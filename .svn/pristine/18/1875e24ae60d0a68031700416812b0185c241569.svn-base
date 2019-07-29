
//加入收藏
function BddFavorite(sURL, sTitle) {
  sURL = encodeURI(sURL);
  try{
    window.external.addFavorite(sURL, sTitle);
  }catch(e) {
    try{
      window.sidebar.addPanel(sTitle, sURL, "");
    }catch (e) {
      alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
    }
  }
}

//选项卡切换
function isShowIndex(tab_id, div_id, who, aId, aHref, num) {
  for (var i = 0; i < num; i++) {
    document.getElementById("dt" + who + i).style.display = "none";
    document.getElementById("sp" + who + i).className = "aoff";
  }
  document.getElementById(div_id).style.display = "block";
  document.getElementById(tab_id).className = "aon";
}

//tab选项卡2
$(function(){
  $('.tit-switch').children().children("li").mouseover(function(){
    $(this).addClass('u-active').siblings().removeClass('u-active');
    $(this).parent().parent().siblings('.list-switch').hide().eq($(this).index()).show();
  });
});

$(function () {

  //导航二级栏目
  $(".m-nav li.col").hover(function(){
    $(this).find(".column").addClass("current");
    $(this).find(".subnav").show();
    $(this).find(".subnav").stop().animate({
      top: "50px",
      opacity: 1
    },300)
    $(".m-nav .mask").show();
    $(".m-nav .mask").stop().animate({
      bottom: "-56px",
      opacity: 1
    },300)
  },function(){
    $(".m-nav li.col .column").removeClass("current");
    $(".m-nav li.col .subnav").hide();
    $(this).find(".subnav").stop().animate({
      top: "70px",
      opacity: 0
    },200)
    $(".m-nav .mask").hide();
    $(".m-nav .mask").stop().animate({
      bottom: "-70px",
      opacity: 0
    },200)
  });
  $(".m-subnav li.col").hover(function(){
    $(this).find(".column").addClass("current");
  },function(){
    $(".m-subnav li.col .column").removeClass("current");
  });


})


$(document).ready(function() {

    $("#top-search-input").keydown(function(e) {
        var curKey = e.which;
        if (curKey == 13) {
            $("#searchNowForm").submit();
            return false;
        }
    });

    $("input[name='_id[]']").click(function() {
        if (this.checked == false) {
            $("#checkall").attr('checked', false);
        }
    });

    $("#checkall").click(function() {
        var checked_status = this.checked;
        $("input[name='_id[]']").each(function()
        {
            this.checked = checked_status;
        });
    });

    $("input[name='_id[]']").click(function() {
        if (this.checked == false) {
            $("#checkall").attr('checked', false);
        }
    });

    $('.hidden-option').mouseover(function() {
        $(this).children("span.pull-right").show();
        return false;
    });

    $('.hidden-option').mouseleave(function() {
        $(this).children("span.pull-right").hide();
        return false;
    });

});

function showBox(url, title) {

    art.dialog.open(url, {
        id: "showBoxDialog",
        title: title,
        lock: true,
        width: 850,
        init: function() {
            var iframe = this.iframe.contentWindow;
            var top = art.dialog.top;
        },
        okVal: "确定",
        cancelVal: "取消",
        ok: true,
        cance: true
    });

    return false;
}

function showNotice(status, noticeText, timeout) {
    if (status === null || status === "") {
        status = "success";
    }
    if (noticeText === null || noticeText === "") {
        noticeText = "正在处理你的请求，请稍候.";
    }
    if (timeout === null || timeout === "") {
        noticeText = 3000;
    }

    var n = noty({
        text: noticeText,
        type: status,
        modal: true,
        layout: 'center',
        theme: 'defaultTheme',
        timeout: false
    });

    setTimeout(function() {
        n.close();
    }, (timeout));

    return n;
}


function checkMultipleSelected(elName) {
    elName = (typeof(elName) == "undefined") ? "_id[]" : elName;
    var chk_value = [];
    $("input[name='" + elName + "']:checked").each(function() {
        chk_value.push($(this).val());
    });

    if (chk_value.length == 0) {
        showNotice('error', '您至少需要选择一条信息', 2000);
        return false;
    }

    return chk_value;
}

function showObj(obj, tipObj) {
    if (tipObj != null) {
        if (obj.is(":visible") == false) {
            tipObj.html("隐藏详情" + " &lt;&lt;");
        } else {
            tipObj.html("显示详情" + " &gt;&gt;");
        }
    }

    obj.slideToggle();
}

function showChannel(myurl, mytitle) {
    art.dialog.open(myurl, {
        id: "showBoxDialog",
        title: mytitle,
        lock: true,
        width: 650,
        init: function() {
            var iframe = this.iframe.contentWindow;
        },
        okVal: "确定",
        ok: function() {
            var iframe = this.iframe.contentWindow;
            var chk_value = [];
            var chk_name = [];
            $(iframe.document).find("input[name='channel[]']:checked").each(function() {
                chk_value.push($(this).val());
                chk_name.push($.trim($(this).parent("div:first").text()));

            });
            if (chk_value.length > 0) {
                $("#channel_id").val(chk_value.join(", "));
                $("#channel_name").html(chk_name.join(", "));
            }
        }
    });

    return false;
}







$(function(){
    $(".is-toolbar li").hover(function(){
    	$(this).removeClass("hd");
		$(this).find("span").stop().animate({
			opacity:1
		},600);
	},function(){
		$(this).addClass("hd");
		$(this).find("span").stop().animate({
			opacity:0
		},200);
		
	});

});

$(function () {
    $(".m-nav li").mouseover(function () {
        var i=$(this).index();
        $(".m-nav li").removeClass("hover").eq(i).addClass("hover");
    })

    var leftHeight = $('.u-leftBox').height();
    var righHeight = $('.u-rightBox').height();
    if(righHeight>=leftHeight){
    	$('.u-leftBox').height(righHeight);
    }else {
    	$('.u-rightBox').height(leftHeight);
    }



})