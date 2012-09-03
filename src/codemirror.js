'use strict';

angular.module('codemirror', []).directive('codemirror', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        scope: { cmModel: '=' },
        compile: function (element, attrs, transclude) {
            if (!element.is('textarea')) {
                throw new Error('Codemirror can only be applied on textarea elements.');
            }

            var options = $parse(attrs.cmOptions)(this) || {},
                codemirror = CodeMirror.fromTextArea(element[0], options);

            return function (scope, element, attrs) {
                if (attrs.cmModel) {
                    // Set initial value
                    codemirror.setValue(scope.cmModel || '');

                    scope.$watch('cmModel', function () {
                        var modelValue = scope.cmModel;

                        if (modelValue !== codemirror.getValue()) {
                            // CodeMirror throws an error in if a non-string value is set.
                            codemirror.setValue(scope.cmModel || '');
                        }
                    });

                    codemirror.setOption('onChange', function (instance) {
                        var value = instance.getValue();

                        // Do not trigger an update if cmModel is undefined or no change has occurred.
                        if ((scope.cmModel || '') !== value) {
                            scope.$apply(function () {
                                scope.cmModel = value;
                            });
                        }
                    });
                }
            };
        }
    };
}]);
