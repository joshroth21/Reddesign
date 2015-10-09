'use strict';

angular.module('reddesign00App').factory('topPosts',function($http) {
	return $http.get('https://www.reddit.com/top.json?limit=10')
		.success(function(data){
			return data;
		})
		.error(function(data){
			return data;
		});
});