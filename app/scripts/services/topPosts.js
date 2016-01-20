'use strict';

angular.module('Reddesign').factory('TopPosts', function($http) {
	var TopPosts = function() {
		this.items = [];
		this.busy = false;
		this.after = '';
	};

  TopPosts.prototype.nextPage = function() {
    if (this.busy) { return; }
    this.busy = true;

    var url = "http://api.reddit.com/hot?after=" + this.after + "&jsonp=JSON_CALLBACK";
    $http.jsonp(url).success(function(data) {
      var items = data.data.children;
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i].data);
      }
      this.after = "t3_" + this.items[this.items.length - 1].id;
      this.busy = false;
    }.bind(this));
  };

  return TopPosts;

/*	return $http.get('https://www.reddit.com/top.json?limit=10')
		.success(function(data){
			return data;
		})
		.error(function(data){
			return data;
		}); */
});