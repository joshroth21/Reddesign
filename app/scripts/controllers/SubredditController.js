'use strict';

var app = angular.module('Reddesign');

app.controller('SubredditController',['$scope','$routeParams','$http',function($scope, $routeParams, $http) {
	$scope.subName = $routeParams.subName;
	$http.get('https://www.reddit.com/r/' + $scope.subName + '/hot.json?limit=10')
		.success(function(data){
			$scope.subreddit = data.data.children;
		})
		.error(function(data){
			return data;
		});
}]);