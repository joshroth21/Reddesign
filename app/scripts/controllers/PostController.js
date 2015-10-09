'use strict';

angular.module('reddesign00App').controller('PostController',['$scope','$routeParams','$http',function($scope, $routeParams, $http) {
	$scope.postName = $routeParams.postName;
	$http.get('https://www.reddit.com/by_id/' + $scope.postName + '.json')
		.success(function(data){
			$scope.post = data.data.children[0].data;
		})
		.error(function(data){
			return data;
		});
}]);