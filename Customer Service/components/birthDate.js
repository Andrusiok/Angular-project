angular.module('customerService').component('birthDate',{
    templateUrl: '/components/birthDate.htm',
    bindings: {
        value: "=",
        model: "=",
    }
});