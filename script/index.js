$(document).ready(function(){
		//解析html后面跟的提交参数
	function getQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = location.search.substr(1).match(reg); 
		if (r != null) return unescape(decodeURI(r[2])); return null; 
	}
	
    $("#pay_qr").qrcode({ width: 350, height: 350, text: getQueryString("url") });
});