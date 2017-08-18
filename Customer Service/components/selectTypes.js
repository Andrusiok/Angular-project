angular.module('customerService').component('selectTypes',{
    templateUrl: '/components/selectTypes.htm',
    bindings: {
        list: '=',
        model: '='
    }
});