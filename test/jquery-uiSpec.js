(function () {
    'use strict';

    describe('jquery-ui directives', function () {
        beforeEach(module('jquery-ui'));

        describe('jui-button', function () {
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
    });
}());
