'use strict';

describe('Module codemirror', function () {
    beforeEach(module('codemirror'));

    describe('Directive codemirror', function () {
        it('transforms textarea elements', function () {
            inject(function ($compile, $rootScope) {
                var element = $compile('<textarea codemirror>foobar</textarea>')($rootScope),
                    codemirror = element.siblings()[0].CodeMirror;

                expect(codemirror.getValue()).toEqual('foobar');
            });
        });

        it('accepts options through cm-options', function () {
            inject(function ($compile, $rootScope) {
                var element = $compile('<textarea codemirror cm-options="{ mode: \'javascript\' }">foobar</textarea>')($rootScope),
                    codemirror = element.siblings()[0].CodeMirror;

                expect(codemirror.getOption('mode')).toEqual('javascript');
            });
        });

        it('is instantiated with the model\'s value', function () {
            inject(function ($compile, $rootScope) {
                $rootScope.model = 'foo';

                var element = $compile('<textarea codemirror cm-model="model"></textarea>')($rootScope),
                    codemirror = element.siblings()[0].CodeMirror;

                expect(codemirror.getValue()).toEqual('foo');
            });
        });

        it('pushes changes from model to CodeMirror instance', function () {
            inject(function ($compile, $rootScope) {
                $rootScope.model = 'foo';

                var element = $compile('<textarea codemirror cm-model="model"></textarea>')($rootScope),
                    codemirror = element.siblings()[0].CodeMirror;

                $rootScope.$apply(function () {
                    $rootScope.model = 'bar';
                });

                expect(codemirror.getValue()).toEqual('bar');
            });
        });

        it('pushes changes from CodeMirror to the model', function () {
            inject(function ($compile, $rootScope) {
                $rootScope.model = 'foo';

                var element = $compile('<textarea codemirror cm-model="model"></textarea>')($rootScope),
                    codemirror = element.siblings()[0].CodeMirror;

                codemirror.setValue('bar');

                expect($rootScope.model).toEqual('bar');
            });
        });
    });
});
