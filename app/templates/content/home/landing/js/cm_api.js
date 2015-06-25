'use strict';
(function() {

	var cmApp = angular.module('cmApp', []);

	cmApp.controller('MainPageController', ['$scope', '$http',
		function($scope,$http)
		{
			$scope.apis;

			$scope.getApis = function() {
				$http({ method: 'GET', url: '/api/apis'}).
					success(function(data,status) {
						console.log(data);
						$scope.apis = data;
					}).
					error(function(data, status) {
						console.log(data);
					});
			};

			$scope.getApis();

		}]);

})();

// AngularJS 1.3.0 beta
