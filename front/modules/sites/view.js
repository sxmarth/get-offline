'use strict';

angular.module('app').controller('ViewCtrl', function ($scope, $location, site) {
	$scope.site = site;
	$location.path(site.downloadPath);
});
