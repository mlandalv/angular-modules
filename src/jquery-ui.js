'use strict';

angular.module('jquery-ui', []).directive('juiButton', function () {
    return {
        restrict: 'A',
        compile: function (element, attrs, transclude) {
            $(element[0]).button();
        }
    };
});
