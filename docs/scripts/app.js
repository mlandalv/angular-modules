'use strict';

// Declare app level module which depends on filters, and services
angular.module('docsApp', ['codemirror', 'jquery-ui']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'views/index.html' });
    $routeProvider.when('/modules/codemirror', { templateUrl: 'views/codemirror.html' });
    $routeProvider.when('/modules/jquery-ui', { templateUrl: 'views/jquery-ui.html' });
    $routeProvider.otherwise({ redirectTo: '/' });
}]);
