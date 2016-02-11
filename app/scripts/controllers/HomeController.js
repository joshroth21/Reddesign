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

function upvote(postName) {
	$('#' + postName + ' .panel-body').slideUp('fast');
	console.log(postName + ": +1");
}


angular.module('Reddesign').controller('HomeController', function($scope, $http, TopPosts) {
	$scope.topPosts = new TopPosts();
	$scope.upvote = function(postName) {
		upvote(postName);
	};
});

angular.element(document).on('keydown', function(e) {
	console.log(e);
	if (e.which === 106 || e.which === 74) {
		next();
	} else if (e.which === 65) {
		upvote();
	}
});
