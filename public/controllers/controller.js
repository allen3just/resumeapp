var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',
	function($scope, $http){
	console.log("hello world from controller");

	var refresh = function(){
		$http.get('/resume').success(function(response){
			console.log("I Got the data I requested");
			$scope.resume = response;
		});
	};
	refresh();

}]);