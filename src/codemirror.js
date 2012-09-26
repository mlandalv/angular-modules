(function (angular) {
    'use strict';

    angular.module('codemirror', []).directive('codemirror', ['$parse', function ($parse) {
        return {
            restrict: 'E',
            scope: { model: '=ngModel' },
            template: '<div></div>',
            replace: true,
            compile: function (element, attrs) {
                var options = $parse(attrs.options)(this) || {},
                    codemirror;

                options.readOnly = options.readOnly || !!attrs.$attr.readonly;
                options.lineNumbers = options.lineNumbers || !!attrs.$attr.linenumbers;
                options.mode = options.mode || attrs.mode;
                options.value = options.value || element.context.innerHTML;

                codemirror = CodeMirror(element[0], options);

                return function (scope, element, attrs) {
                    if (attrs.$attr.hasOwnProperty('ngModel')) {
                        // Set initial value
                        codemirror.setValue(scope.model || '');

                        scope.$watch('model', function () {
                            var modelValue = scope.model;

                            if (modelValue !== codemirror.getValue()) {
                                // CodeMirror throws an error if a non-string value is set.
                                codemirror.setValue(scope.model || '');
                            }
                        });

                        codemirror.setOption('onChange', function (instance) {
                            var value = instance.getValue();

                            // Do not trigger an update if cmModel is undefined or no change has occurred.
                            if ((scope.model || '') !== value) {
                                scope.$apply(function () {
                                    scope.model = value;
                                });
                            }
                        });
                    }
                };
            }
        };
    }]);
}(angular));