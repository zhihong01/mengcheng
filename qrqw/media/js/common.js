$(document).ready(function(){
		  $(".xq").click(function(){
		  $(".bspt").toggle();
		  });
	
});


$(function(){
        $(".m-zthf").hover(function() {
            $(this).animate({"right":0},300);
        },function(){
            $(this).animate({"right":"-55px"},300);
        });
	});
	$('.change_color').click(function(){
		var color = $(this).data("id");
		$.ajax({
			url: '/home/changeColor/?color='+color,
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				if(data.status === 2){
					window.location.reload();
				}else{
					alert(data.msg);
				}
			}
		});
		
	});

//Title提示美化
jQuery(document).ready(function($) {
    var sweetTitles = {
        x: 10,
        y: 20,
        tipElements: "a",
        noTitle: false,
        init: function() {
            var noTitle = this.noTitle;
            $(this.tipElements).each(function() {
                $(this).mouseover(function(e) {
                    if (noTitle) {
                        isTitle = true;
                    } else {
                        isTitle = $.trim(this.title) != '';
                    }
                    if (isTitle) {
                        this.myTitle = this.title;
                        this.title = "";
                        var tooltip = "<div class='tooltip'><div class='tipsy-arrow tipsy-arrow-n'></div><div class='tipsy-inner'>" + this.myTitle + "</div></div>";
                        $('body').append(tooltip);
                        $('.tooltip').css({
                            "top": (e.pageY + 20) + "px",
                            "left": (e.pageX - 20) + "px"
                        }).show('fast');
                    }
                }).mouseout(function() {
                    if (this.myTitle != null) {
                        this.title = this.myTitle;
                        $('.tooltip').remove();
                    }
                }).mousemove(function(e) {
                    $('.tooltip').css({
                        "top": (e.pageY + 20) + "px",
                        "left": (e.pageX - 20) + "px"
                    });
                });
            });
        }
    };
    $(function() {
        sweetTitles.init();
    });
});