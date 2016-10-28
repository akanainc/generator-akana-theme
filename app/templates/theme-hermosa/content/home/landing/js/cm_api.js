'use strict';
(function() {

	var cmApp = angular.module('cmApp', []);

	cmApp.controller('MainPageController', ['$scope', '$http',
		function($scope,$http)
		{
			$scope.apis;
			$scope.apiCount = 0;

			$scope.getApis = function() {
				$http({ method: 'GET', url: '/api/apis'}).
					success(function(data,status) {
						//console.log(data);
						$scope.apis = data;
						$scope.apiCount = $scope.apis.channel.item.length;
					}).
					error(function(data, status) {
						console.log("error retreiving data")
						console.log(data);
					});
			};

			$scope.getApis();

		}]);

})();

// AngularJS 1.5.8
