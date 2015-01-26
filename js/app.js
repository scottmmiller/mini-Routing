var app = angular.module('miniRouting', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'homeTmpl.html',
		controller: 'homeCtrl'
	}).when('/settings', {
		templateUrl: 'settingsTmpl.html',
		controller: 'settingsCtrl'
	}).when('/products:id', {
		templateUrl: 'productsTmpl.html',
		controller: 'productsCtrl'
	}).otherwise('/');

});