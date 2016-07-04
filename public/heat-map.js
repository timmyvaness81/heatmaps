var twitchApp = angular.module('twitchApp', []);

var svgContainer = d3.select("body").append("svg")
									.attr('width', 500)
									.attr('height', 500);

var rectangles = svgContainer.selectAll('rectangle');

twitchApp.controller('twitchAppController', function ($scope, $http) {

	$scope.clickStart = function() {
		
		$http.get('/startCounter')
			 .then(function(res){
				 console.log(res);
				 console.log(res.data);
			 });
	};
	
	$scope.clickUpdate = function () {
		;
	}
});