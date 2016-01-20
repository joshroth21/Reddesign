'use strict';
angular.module('Reddesign').factory('embedGif', function($http,url,domain) {
  var regGif = /\.gif$/g;
  var extGif = regGif.test(url);
  var movUrl = "";
  var gfyUrl = "";
  if(extGif) {
    $http.get('http://gfycat.com/cajax/checkUrl/' + url).success(function(data){
      if(data.urlKnown) {
        movUrl = data.webmUrl;
        gfyUrl = data.gfyUrl;
      }
    });
  } else if(domain === "i.imgur.com" || domain === "imgur.com") {
    movUrl = url.replace(/\.gifv/g,".webm");
  } else if(domain === "gfycat.com") {
    var regGfyName = /([A-Z])\w+/g;
    var gfyName = url.match(regGfyName);
    $http.get('http://gfycat.com/cajax/get/' + gfyName).success(function(data){
        movUrl = data.gfyItem.webmUrl;
    });
  }
  return movUrl;
});