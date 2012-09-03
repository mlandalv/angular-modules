'use strict';

describe('Module jquery-ui', function () {
    beforeEach(module('jquery-ui'));

    describe('Directive jui-button', function () {
        it('works on a elements', function () {
            inject(function ($compile, $rootScope) {
                var element = $compile('<a href="#" jui-button>link</a>')($rootScope);

                expect(element.data('button')).toBeTruthy();
            });
        });

        it('works on button elements', function () {
            inject(function ($compile, $rootScope) {
                var element = $compile('<button jui-button>button</button>')($rootScope);

                expect(element.data('button')).toBeTruthy();
            });
        });

        it('works on input[type=button] elements', function () {
            inject(function ($compile, $rootScope) {
                var element = $compile('<input type="button" jui-button>button</input>')($rootScope);

                expect(element.data('button')).toBeTruthy();
            });
        });

        it('works on input[type=submit] elements', function () {
            inject(function ($compile, $rootScope) {
                var element = $compile('<input type="submit" jui-button>submit</input>')($rootScope);

                expect(element.data('button')).toBeTruthy();
            });
        });
    });

    describe('Directive jui-accordion', function () {
        it('throws error if not applied to div', function () {
            inject(function ($compile, $rootScope) {
                expect(function () {
                    $compile('<a jui-accordion>foobar</a>')($rootScope);
                }).toThrow();
            });
        });

        it('works on div elements', function () {
            inject(function ($compile, $rootScope) {
                var element = $compile('<div jui-accordion></div>')($rootScope);

                expect(element.data('accordion')).toBeTruthy();
            });
        });

        it('accepts options through jui-options', function () {
            inject(function ($compile, $rootScope) {
                var element = $compile('<div jui-accordion jui-options="{ autoHeight: false }"></div>')($rootScope);

                expect(element.accordion('option', 'autoHeight')).toBe(false);
            });
        });
    });
});
