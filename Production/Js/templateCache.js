angular.module('templateCache', []).run(['$templateCache', function($templateCache) {$templateCache.put('Application/Application.html','<!-- Author : Hannad Rehman Mon Nov 07 2016 12:06:52 GMT+0530 (India Standard Time)-->\r\n\r\n<div class="container-fluid">\r\n\r\n\t<header>\r\n\t\t<navigation></navigation>\r\n\t</header>\r\n\t<div class="site-body">\r\n\t\t<div ui-view></div>\r\n\t</div>\r\n\t<footer>\r\n\t</footer>\r\n</div>\r\n');
$templateCache.put('Common/Posts/posts.html','<!-- Author : Hannad Rehman Thu Dec 01 2016 23:30:26 GMT+0530 (IST)-->\n<ul class="list-group">\n  <li class="list-group-item" ng-repeat="post in $ctrl.posts.listOfPosts">{{post.title}}<br>{{post.body}}</li>\n</ul>\n');
$templateCache.put('Common/GifDisplay/gifDisplay.html','<!-- Author : Hannad Rehman Wed Dec 07 2016 20:48:13 GMT+0530 (IST)-->\n<h1>hello you have successfully created gifDisplay component</h1>\n\n<div class="col-md-4" ng-repeat="data in gifDisplay.data.images">\n  <img src="{{data.images.fixed_height.url}}" alt="{{data.slug}}" />\n</div>\n');
$templateCache.put('Common/navigation/navigation.html','<nav class="navbar navbar-inverse">\n\n    <div class="navbar-header">\n      <a class="navbar-brand" href="#/">component-modern design</a>\n    </div>\n    <ul class="nav navbar-nav">\n      <li><a href="#/gif">Gif</a></li>\n      <li><a href="#/profile">Profile</a></li>\n    </ul>\n</nav>\n');
$templateCache.put('Views/Gif/gif.html','<!-- Author : Hannad Rehman Wed Dec 07 2016 00:51:22 GMT+0530 (IST)-->\n<div class="row">\n  <div class="col-md-12">\n    <div class="gif-container">\n    <ul class="gif-nav">\n      <li ng-click="gif.navClick(\'trending\')">Trending</li>\n      <li ng-click="gif.navClick(\'random\')">Random</li>\n    </ul>\n    <div class="inner-views">\n      <div class="display-data">\n        <div class="row">\n          <gif-display type=\'gif.elements.type\'></gif-display>\n        </div>\n      </div>\n\n      </div>\n    </div>\n    </div>\n  </div>\n</div>\n');}]);