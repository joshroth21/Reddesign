'use strict';

/**
 * @ngdoc overview
 * @name reddesign00App
 * @description
 * # reddesign00App
 *
 * Main module of the application.
 */
var app = angular.module('reddesign00App', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngTouch', 'ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
	.when("/", {
		controller: 'HomeController',
		templateUrl: 'views/home.html'
	})
	.when("/post/:postName",{
		controller: 'PostController',
		templateUrl: 'views/post.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});