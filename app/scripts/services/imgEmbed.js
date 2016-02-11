'use strict';

angular.module('Reddesign').factory('embedGif', function($http,url) {
	var embedUrl;
	// var regexImg = /.jpg|.webm|.gif|.png/g; // Does the url contain an image?
	var regexGif = /.gif/g; // Image is a gif (or HTML5 video of a gif)
	// var regexGifv = /.gif|.gifv|.webm/g; // Image is a gif (or HTML5 video of a gif)
	// var regex = /(?:[a-z]+\/)([A-Z,a-z,0-9]*)/g;
	if(regexGif.test(url)) {
		$http.get('http://gfycat.com/cajax/checkUrl/' + url).success(function(data){
			if(data.urlKnown) {
				embedUrl = data.webmUrl;
				// gfyUrl = data.gfyUrl;
			}
		});
		return embedUrl;
	} else {
		return false;
	}
});
