'use strict';

describe('Module codemirror', function () {
    beforeEach(module('codemirror'));

    describe('Directive codemirror', function () {
        it('transforms codemirror tags', function () {
            inject(function ($compile, $rootScope) {
                var element = $compile('<codemirror>foobar</codemirror>')($rootScope),
                    codemirror = element[0].children[0].CodeMirror;

                expect(codemirror.getValue()).toEqual('foobar');
            });
        });

        it('accepts options through options attribute', function () {
            inject(function ($compile, $rootScope) {
                var element = $compile('<codemirror options="{ mode: \'javascript\' }">foobar</codemirror>')($rootScope),
                    codemirror = element[0].children[0].CodeMirror;

                expect(codemirror.getOption('mode')).toEqual('javascript');
            });
        });

        it('accepts readonly attribute', function () {
            inject(function ($compile, $rootScope) {
                var element = $compile('<codemirror readonly>foobar</codemirror>')($rootScope),
                    codemirror = element[0].children[0].CodeMirror;

                expect(codemirror.getOption('readOnly')).toEqual(true);
            });
        });

        it('accepts linenumbers attribute', function () {
            inject(function ($compile, $rootScope) {
                var element = $compile('<codemirror linenumbers>foobar</codemirror>')($rootScope),
                    codemirror = element[0].children[0].CodeMirror;

                expect(codemirror.getOption('lineNumbers')).toEqual(true);
            });
        });

        it('accepts mode attribute', function () {
            inject(function ($compile, $rootScope) {
                var element = $compile('<codemirror mode="javascript">foobar</codemirror>')($rootScope),
                    codemirror = element[0].children[0].CodeMirror;

                expect(codemirror.getOption('mode')).toEqual('javascript');
            });
        });

        it('is instantiated with the model\'s value', function () {
            inject(function ($compile, $rootScope) {
                $rootScope.model = 'foo';

                var element = $compile('<codemirror ng-model="model">custom</codemirror>')($rootScope),
                    codemirror = element[0].children[0].CodeMirror;

                expect(codemirror.getValue()).toEqual('foo');
            });
        });

        it('pushes changes from model to CodeMirror instance', function () {
            inject(function ($compile, $rootScope) {
                $rootScope.model = 'foo';

                var element = $compile('<codemirror ng-model="model"></codemirror>')($rootScope),
                    codemirror = element[0].children[0].CodeMirror;

                $rootScope.$apply(function () {
                    $rootScope.model = 'bar';
                });

                expect(codemirror.getValue()).toEqual('bar');
            });
        });

        it('pushes changes from CodeMirror to the model', function () {
            inject(function ($compile, $rootScope) {
                $rootScope.model = 'foo';

                var element = $compile('<codemirror ng-model="model"></codemirror>')($rootScope),
                    codemirror = element[0].children[0].CodeMirror;

                codemirror.setValue('bar');

                expect($rootScope.model).toEqual('bar');
            });
        });
    });
});
