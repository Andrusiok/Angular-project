angular.module('customerService').component('ngNamesInput',{
    templateUrl: '/components/ngNamesInput.htm',
    bindings: {
        firstName: "=",
        lastName: "=",
    }
});