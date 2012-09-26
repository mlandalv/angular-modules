(function (angular) {
    'use strict';

    angular.module('jquery-ui', []).directive('juiButton',function () {
        return {
            restrict: 'A',
            compile: function (element, attrs, transclude) {
                console.log(element[0]);
                $(element).button();
            }
        };
    }).directive('juiAccordion', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            compile: function (element, attrs, transclude) {
                if (!element.is('div')) {
                    throw new Error('jui-accordion can only be applied on div elements.');
                }

                var options = $parse(attrs.juiOptions)(this) || {};

                $(element).accordion(options);
            }
        };
    }]);
}(angular));