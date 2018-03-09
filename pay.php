<?php
	//首页显示的二维码里面指向这个php页面的链接
	$IndexQrURL = 'http://你的域名地址/Qrpay/pay.php';
	
	//支付宝收款码解析出来的链接地址
	$AlipayURL = 'HTTPS://QR.ALIPAY.COM/FKX01520ARER52G3IO9LE2';
	
	//微信收款码解析出来的链接地址
	$WechatpayURL  = 'wxp://f2f05aeofTBZE6UOKDjp0Gby2bENneg6Heb5';
	
	//微信名称
	$WechatpayName = '^_^空(Song10058012)';
	

	$data = $_SERVER['HTTP_USER_AGENT'];
	if (strstr($_SERVER['HTTP_USER_AGENT'], 'AlipayClient')) {
	    header('location: ' . $AlipayURL);
	}
	else if(strstr($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger')){
		echo '<script language="javascript" type="text/javascript">';
		echo 'window.location.href = "weixin.html?wxp=' . $WechatpayURL . '&name=' . $WechatpayName . '"';
		echo '</script>';
	}else {
		echo '<script language="javascript" type="text/javascript">';  
		echo 'window.location.href = "index.html?url=' . $IndexQrURL . '"';  
		echo '</script>';  
	}
	exit;

?>