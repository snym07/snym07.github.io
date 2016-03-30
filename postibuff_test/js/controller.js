var myApp = angular.module('myApp', []);

myApp.controller('MyController', function($scope, $http){
	$http.get('js/countries.json').success(function(data){
		$scope.country = data;
	});
});