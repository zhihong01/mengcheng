/*
 * WXA11Y.JS
 * version: 2.0.0 (2017/12/20)
 *
 * Copyright 2015,微象科技-李刚,moaol@foxmail.com
 *增加JS属性
 *id="WXA11Y"	JS文件ID
 *c="/WXA11Y/"	无障碍目录
 *u="/hjs/wza/2017-04/13/content_26dfebb1614f4255b5cabe38d0b1635e.shtml"	帮助说明文档地址
 *b="ID" 无障碍浏览按钮【必填项】，通过点击该按钮来进行显示|隐藏,默认显示
 *20180117调整-如果页面中没有无障碍触发按钮，则自动增加
 *f=无障碍按钮的方向（left|right[默认]）
 *w=页面宽度（整数）
 */
var domain_self = '249.abd.cc';
var $WXA11yOpen;window.require=function(){var doc=document,head=doc.getElementsByTagName("head")[0],iframe=doc.getElementsByTagName("iframe"),jsNode=doc.getElementsByTagName("script"),stackFlag=1,stackJSs=[],stackBacks=[],jsLoaded={};function stackPush(urls,callBack,charset){callBack&&stackBacks.push(callBack);if(typeof urls=="string"){stackJSs.push([urls,stackShift,charset]);}else{for(var i=0;i<urls.length;i+=1){stackJSs.push([urls[i],stackShift,charset]);}}
if(stackFlag==0){stackFlag=1;stackShift();}}
function stackShift(){if(stackJSs.length){disorderJS.apply(null,stackJSs.shift());}else if(stackBacks.length){stackBacks.pop()();stackShift();}else{stackFlag=0;}}
function loadJS(src,callBack,charset){var url=src;if(jsLoaded[url]){setTimeout(function(){callBack&&callBack();});return;}
var t=doc.createElement("script");t.setAttribute("type","text/javascript");charset&&t.setAttribute("charset",charset);t.onreadystatechange=t.onload=t.onerror=function(){if(!t.readyState||t.readyState=='loaded'||t.readyState=='complete'){t.onreadystatechange=t.onload=t.onerror=null;t=null;jsLoaded[url]=true;setTimeout(function(){callBack(src);},200);}};t.src=url;head.appendChild(t);}
function disorderJS(urls,callBack,charset){if(typeof urls=="string"){loadJS(urls,function(){callBack&&callBack();},charset);return require;}
var led={};function loadBack(src){delete led[src];for(var n in led){return;}
callBack&&callBack();}
for(var i=0;i<urls.length;i+=1){led[urls[i]]=true;loadJS(urls[i],loadBack,charset);}
return require;}
function ready(){stackFlag=0;stackShift();}
function readyExe(){Array.prototype.shift.call(arguments).apply(window,arguments);return require;}
if(doc.attachEvent){doc.attachEvent("onreadystatechange",function(){if(doc.readyState=="complete"||doc.readyState=="loaded"){ready();}});}else{doc.addEventListener("DOMContentLoaded",ready,false);}
function require(){var initFiles=[];var l=arguments.length;var jnum=0;if(!(typeof(jQuery)=="undefined")){jnum=1;}
for(var j=jnum;j<l;j++){for(var i=0;i<jsNode.length;i++){if(jsNode[i].src.indexOf(arguments[j])>=0){break;}
if(i==jsNode.length-1){initFiles.push(arguments[j]);}}}
var ls=initFiles.length;if(ls==1&&typeof initFiles[ls]=="function"){stackPush(Array.prototype.slice.call(initFiles,0,ls),initFiles[ls]);return;}
ls-=1;if(initFiles[ls]==null||typeof initFiles[ls]){stackPush(Array.prototype.slice.call(initFiles,0,ls),initFiles[ls],initFiles[ls+1]);return require;}
stackPush(Array.prototype.slice.call(initFiles));return;};require.version="1.3.0";require.bale=function(){var callBack=Array.prototype.pop.call(arguments);function back(){len-=1;len==0&&setTimeout(function(){callBack.apply(ex,bs);});}
var len=arguments.length,ex={},bs=[];for(var i=0;i<arguments.length;i+=1){bs[i]=arguments[i](back,ex);}
return require;};require.appendCSS=function(filename,isframe){for(var i=0;i<iframe.length;i++)
{if(iframe[i].style.display!="none"&&iframe[i].src.indexOf(window.location.host)>=0)
{iframe[i].setAttribute("voiceFrame",true);var fileref=doc.createElement("link"),ihead=iframe[i].contentWindow.document.head;fileref.setAttribute("rel","stylesheet");fileref.setAttribute("type","text/css");fileref.setAttribute("href",filename);if(typeof fileref!="undefined")
{ihead.appendChild(fileref);}}}
var fileref=doc.createElement("link");fileref.setAttribute("rel","stylesheet");fileref.setAttribute("type","text/css");fileref.setAttribute("href",filename);if(typeof fileref!="undefined")head.appendChild(fileref);};require.getMsec=function(str){var timeNum=str.substring(0,str.length-1)*1;var timeStr=str.substring(str.length-1,str.length);if(timeStr=="s"){return timeNum*1000;}else if(timeStr=="h"){return timeNum*60*60*1000;}else if(timeStr=="d"){return timeNum*24*60*60*1000;}};require.setCookie=function(name,value,time){var msec=this.getMsec(time);var exp=new Date();exp.setTime(exp.getTime()+msec*1);document.cookie=name+"="+escape(value)+";expires="+exp.toGMTString();};require.getCookie=function(name){var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");if(arr=document.cookie.match(reg)){return unescape(arr[2]);}else{return null;}};require.bodyPT=function(h){$(doc).find("body:first").animate({"paddingTop":h+"px"});};require.initA11y=function(b){var _b=$(b);_b.slideToggle("fast",function(){if(_b.is(':hidden')){require.bodyPT(0);require.setCookie("WXA11Y","false","8h");}else{require.bodyPT(_b.outerHeight()-6);require.setCookie("WXA11Y","true","8h");}});};return require;}();var _J=document.getElementById("WXA11Y"),y=_J.getAttribute("y"),path="http://"+y+_J.getAttribute("c");if(location.host.indexOf(domain_self)<0){console.log("请勿非法引用！");path="";}else{require(path+"jquery.js",path+"soundmanager2-nodebug-jsmin.js",path+"WXA11y.js",function(){require.bale(function(){require.appendCSS(path+"WXA11y.css");var _doc=document,helpURL=_J.getAttribute("u"),toolHTML='<div class="WXA11Y"><a title="开启辅助线" class="fun" id="tool-line" href="javascript:;" target="_self"></a><a title="开启显示屏" class="fun" id="tool-screen" href="javascript:;" target="_self"></a><a title="高对比度" class="fun" id="tool-contrast" href="javascript:;" target="_self"></a><span class="wx-space"></span><a title="文字增大" class="fun" id="font-lagre" href="javascript:;" target="_self"></a><a title="文字减小" class="fun" id="font-small" href="javascript:;" target="_self"></a><span class="wx-space"></span><a title="页面放大" class="fun" id="page-zoomin" href="javascript:;" target="_self"></a><a title="页面缩小" class="fun" id="page-zoomout" href="javascript:;" target="_self"></a><span class="wx-space"></span><a title="开启指读" class="fun" id="tts-single" href="javascript:;" target="_self"></a><a title="开启连读" class="fun" id="tts-screenread" href="javascript:;" target="_self"></a><span class="wx-space"></span><a title="工具按钮折叠" class="fun" id="WXA11y-fold" href="javascript:;" target="_self"></a><a title="无障碍操作说明" class="fun" id="WXA11y-help" href="'+helpURL+'" target="_blank"></a><a title="关闭无障碍浏览" class="fun" id="WX-easyRead-Smooth" href="javascript:;" target="_self"></a></div>',displayHTML='<span aria-hidden="true" title="关闭显示屏">X</span><center></center>',easyReadBtn=document.createElement("div"),a11ydisplay=document.createElement("div");easyReadBtn.className='a11ytoolbar';easyReadBtn.innerHTML=toolHTML;a11ydisplay.setAttribute("id","a11ydisplay");a11ydisplay.innerHTML=displayHTML;a11ydisplay.style.display="none";var toggleBtn=_J.getAttribute("b");$WXA11yOpen=$("iframe[src$='top.html']").contents().find("#"+toggleBtn);if($WXA11yOpen.size()<1){$WXA11yOpen=$("#"+toggleBtn);}
if($WXA11yOpen.size()<1){$WXA11yOpen=_doc.createElement("a");$WXA11yOpen.setAttribute("class","toggleBtn");_doc.body.appendChild($WXA11yOpen)
$WXA11yOpen=$($WXA11yOpen);var _f=_J.getAttribute("f")||"right",_w=_J.getAttribute("w")||1100,_py=60;if(_f=="left"){_f=-1;}else{_f=1;_py=-30;}
$WXA11yOpen.css({"marginLeft":(_w/2+_py)*_f+"px"});}
if($WXA11yOpen){easyReadBtn.style.display='none';}else{require.initA11y(easyReadBtn);}
$WXA11yOpen.on("click",function(e){require.initA11y(easyReadBtn);e.stopPropagation;});_doc.body.appendChild(easyReadBtn);_doc.body.appendChild(a11ydisplay);},function(){var isopened=require.getCookie("WXA11Y"),isfold=require.getCookie("WXA11YFOLD"),isread=require.getCookie("WXA11YAUTOREAD"),issingle=require.getCookie("WXA11YSINGLE"),isline=require.getCookie("WXA11YLINE"),isdisplay=require.getCookie("WXA11YDISPLAY"),contrast=require.getCookie("WXA11YCONTRAST");if(isopened=="true"){require.initA11y(".a11ytoolbar");if(contrast=="true"){$("#tool-contrast").trigger("click");}
if(isfold=="true"){$("#WXA11y-fold").trigger("click");}
if(isline=="true"){$("#tool-line").trigger("click");}
if(isdisplay=="true"){$("#tool-screen").trigger("click");}
if(issingle=="true"){setTimeout('$(function(){$("#tts-single").trigger("click")})',3000);}else if(isread=="true"){setTimeout('$(function(){$("#tts-screenread").trigger("click")})',3000);}}},function(){},function(){});})}