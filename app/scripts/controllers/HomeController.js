'use strict';

angular.module('Reddesign').controller('HomeController', function($scope, $http, TopPosts) {
	$scope.topPosts = new TopPosts();
});
