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
var app = angular.module('Reddesign', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngTouch', 'ngRoute', 'infinite-scroll']);

app.config(function ($routeProvider) {
	$routeProvider
	.when("/", {
		controller: 'HomeController',
		templateUrl: 'views/home.html'
	})
	.when("/p/:postName", {
		controller: 'PostController',
		templateUrl: 'views/post.html'
	})
	.when("/r/:subName", {
		controller: 'SubredditController',
		templateUrl: 'views/subreddit.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});