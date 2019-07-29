
// 二级切换


function killerrors() { 
return true; 
} 
window.onerror = killerrors;



function isShowIndex(tab_id, div_id, who, aId, aHref, num) {
    for (var i = 0; i < num; i++) {
        document.getElementById("dt" + who + i).style.display = "none";
        document.getElementById("sp" + who + i).className = "aoff";
    }
    document.getElementById(div_id).style.display = "block";
    document.getElementById(tab_id).className = "aon";
    document.getElementById(aId).href = aHref;
}

 function tab(_this){

        $(_this).addClass("on").siblings().removeClass("on");
        $(_this).parent().siblings(".item").eq($(_this).index()).show().siblings(".item").hide();
    }

    $('.power .title>a').hover(function(){
        tab(this);
    })
    $('.money .title>a').hover(function(){
        tab(this);
    })

    $('.money .title>a').hover(function(){
        tab(this);
    })
    $('.resource .m-item .title>a').hover(function(){
        tab(this);
    })
    $('.service .m-item .title>a').hover(function(){
        tab(this);
    })
    $('.look .m-item .title>a').hover(function(){
        tab(this);
    })

    function tabs(_this){

        $(_this).addClass("on").siblings().removeClass("on");
        $(_this).parent().siblings(".m-item").eq($(_this).index()).show().siblings(".m-item").hide();
    }
    
    $('.is-money .m-title>a').hover(function(){
        tabs(this);
    })
    $('.resource  .m-title>a').hover(function(){
        tabs(this);
    })
    $('.service .m-title>a').hover(function(){
        tabs(this);
    })
    $('.look .m-title>a').hover(function(){
        tabs(this);
    })
    

