'use strict';

angular.module('reddesign00App').controller('HomeController',['$scope', 'topPosts', function($scope, topPosts) {
	topPosts.success(function(data){
		$scope.topPosts = data.data.children;
	});
}]);