var twitchApp = angular.module('twitchApp', []);

var svgContainer = d3.select("body").append("svg")
									.attr('width', 500)
									.attr('height', 500);

var rectangles = svgContainer.selectAll('rectangle')
							 .

twitchApp.controller('twitchAppController', function () twitchAppController($scope, $http) {
	var data = $.param()
	
	$scope.clickStart() = function() {
		
		}
		$http({
			method: 'GET',
			url: '/startCounter()',
		});
	
	$scope.clickUpdate = function () {
		;
	}
});