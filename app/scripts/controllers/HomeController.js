'use strict';

angular.module('Reddesign').controller('HomeController', function($scope, topPosts) {
	$scope.topPosts = new topPosts();
	$scope.showFullPreview = function() {
		console.log('show');
		return true;
	};
	$scope.hideFullPreview = function() {
		console.log('hide');
		return false;
	};
});