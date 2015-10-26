'use strict';

angular.module('Reddesign').controller('HomeController', function($scope, topPosts) {
	$scope.topPosts = new topPosts();
});