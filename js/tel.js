// JavaScript Document
$(function(){
		var device = navigator.userAgent;
		if((device.indexOf('iPhone') > 0 && device.indexOf('iPad') == -1) || device.indexOf('iPod') > 0 || device.indexOf('Android') > 0){
			$(".tel").wrap('<a href="tel:0985-77-4939"></a>');
		}
	});
