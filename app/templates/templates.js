angular.module('onlineTemplateStore.templates', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
		when('/templates', {
			templateUrl: 'templates/templates.html', 
			controller: 'TemplatesCtrl' 
		}).
		when('/templates/:templateId', {
			templateUrl: 'templates/templateDetails.html', 
			controller: 'TemplateDetailsCtrl' 
		})
}])

.controller('TemplatesCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('json/image-gallery.json').success(function (data) {
		$scope.wallpapers = data;
	})
}])

.controller('TemplateDetailsCtrl', ['$scope', '$routeParams', '$http', '$filter', function ($scope, $routeParams, $http, $filter) {
	var templateId = $routeParams.templateId;
	$http.get('json/image-gallery.json').success(function (data) {
		$scope.wallpaper = $filter('filter')(data, function (d) {
			return d.id == templateId;
		})[0];
		$scope.mainImage = $scope.wallpaper.image;
	})
}]);