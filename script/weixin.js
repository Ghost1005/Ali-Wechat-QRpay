$(document).ready(function(){
	//解析html后面跟的提交参数
	function getQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = location.search.substr(1).match(reg); 
		if (r != null) return unescape(decodeURI(r[2])); return null; 
	}
	
    $(".pay-qrcode-img").qrcode(
        {
			 render : "canvas",    //设置渲染方式，有table和canvas，使用canvas方式渲染性能相对来说比较好
			 text : getQueryString("wxp"),    //扫描二维码后显示的内容,可以直接填一个网址，扫描二维码后自动跳向该链接
			 width : 340,            // //二维码的宽度
			 height : 340,              //二维码的高度
			 background : "#ffffff",       //二维码的后景色
			 foreground : "#000000",        //二维码的前景色
			 src: '../img/pm.jpg'             //二维码中间的图片
		}
    );
    $(".pay-name").text(getQueryString("name"));
});