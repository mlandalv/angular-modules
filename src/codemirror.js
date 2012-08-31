'use strict';

angular.module('codemirror', []).directive('codemirror', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            // todo: sync value to model

            if (!element.is('textarea')) {
                throw new Error('Codemirror can only be applied on textarea elements.');
            }

            var options = scope.$eval(attrs.cmOptions) || {},
                codemirror = CodeMirror.fromTextArea(element[0], options);
        }
    };
});
