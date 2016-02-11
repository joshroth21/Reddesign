'use strict';


function next() {
	var visiblePosts = [];

	$('.post').each(function() {
		var thisScroll = $(this).offset().top;
		var bodyScroll = $('body').scrollTop();
		var windowHeight = $(window).innerHeight();
		if((thisScroll >= bodyScroll) && ((thisScroll - bodyScroll) < windowHeight)) {
			visiblePosts.push('#' + $(this).attr('id'));
		}
	});

	$('body').animate({ scrollTop: $(visiblePosts[1]).offset().top - 15 }, 150);

	// Doesn't work for posts out of viewport
};

angular.module('Reddesign').controller('HomeController', function($scope, $http, TopPosts) {
	$scope.topPosts = new TopPosts();
});
