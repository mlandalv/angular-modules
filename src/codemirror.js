'use strict';

angular.module('codemirror', []).directive('codemirror', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        compile: function (element, attrs, transclude) {
            // todo: sync value to model

            if (!element.is('textarea')) {
                throw new Error('Codemirror can only be applied on textarea elements.');
            }

            var options = $parse(attrs.cmOptions)(this) || {},
                codemirror = CodeMirror.fromTextArea(element[0], options);
        }
    };
}]);
