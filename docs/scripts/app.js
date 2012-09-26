'use strict';

// Declare app level module which depends on filters, and services
angular.module('docsApp', ['codemirror', 'jquery-ui']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'partials/index.html' })
        .when('/modules/codemirror', { templateUrl: 'partials/codemirror.html' })
        .when('/modules/chosen', { templateUrl: 'partials/chosen.html' })
        .when('/modules/jquery-ui', { templateUrl: 'partials/jquery-ui.html' })
        .otherwise({ redirectTo: '/' });
}]);
