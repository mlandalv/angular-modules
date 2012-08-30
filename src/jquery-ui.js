'use strict';

angular.module('jquery-ui', []).directive('juiButton', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(element).button();
        }
    };
});
