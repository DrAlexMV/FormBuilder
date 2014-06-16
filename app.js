angular.module('FormBuilder', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'FormBuilder.formInput', 'FormBuilder.password']);

angular.module('FormBuilder').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
