angular.module('customerService').component('namesInput',{
    templateUrl: '/components/namesInput.htm',
    bindings: {
        firstName: "=",
        lastName: "=",
    }
});