//Author : Hannad Rehman Thu Dec 01 2016 23:17:09 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent 
var app=require("../../../../Development/Assets/Js/appConfig");
app.factory('homeService',['$http',function($http){
	return{
		functionName:'functionD definition'
	};
}]);