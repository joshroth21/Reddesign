'use strict';

angular.module('Reddesign').factory('keyShortcuts', function() {
    var keyShortcuts = "Hello!";
    return keyShortcuts;
});

/*
# Scroll to posts

var postList = $('.post');

$(postList).each(function() {
    $('body').animate({ scrollTop: $(this).offset().top - 15 }, 150);
});

# Visible posts

var visiblePosts = [];

$('.post').each(function() {
    var thisScroll = $(this).offset().top;
    var bodyScroll = $('body').scrollTop();
    var windowHeight = $(window).innerHeight();
    if((thisScroll >= bodyScroll) && ((thisScroll - bodyScroll) < windowHeight)) {
        console.log($(this).attr('id'));
        visiblePosts.push($(this).attr('id'));
    }
});

# SCROLL TO NEXT POST :D

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

# SCROLL TO PREVIOUS POST

.prev();

# Bind scroll to J key

$(document).keydown(function(e){
    if ( e.which == 106 | e.which == 74 ) {
        next();
    }
});

*/
