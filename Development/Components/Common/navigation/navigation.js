//Author : Hannad Rehman Thu Dec 01 2016 23:20:39 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent 
var app=require('../../../../Development/Assets/Js/appConfig');

app.component('navigation',{
	//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
	controller:require('./navigationController'),
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Common/navigation/navigation.html');
	}]
});