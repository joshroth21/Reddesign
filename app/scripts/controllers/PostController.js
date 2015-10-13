'use strict';

var app = angular.module('reddesign00App');

app.controller('PostController',['$scope','$routeParams','$http','$sce',function($scope, $routeParams, $http, $sce) {
	$scope.postName = $routeParams.postName;
	$http.get('https://www.reddit.com/by_id/' + $scope.postName + '.json')
		.success(function(data){
			$scope.post = data.data.children[0].data;
			$scope.postMediaEmbed = $sce.trustAsHtml($scope.post.secure_media_embed.content);
		})
		.error(function(data){
			return data;
		});
}]);