var phonecatApp = angular.module('customerService', ['ngRoute']).config(routeConfig);

function routeConfig($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/all',
      {
        templateUrl: '/views/allcontacts.htm',
        controller: 'AllContactsController'
      })

    .when('/',
    {
      templateUrl: '/views/allcontacts.htm',
      controller: 'AllContactsController'
    })

    .when('/favourites',
      {
        templateUrl: '/views/favourites.htm',
        controller: 'FavouritesController'
      }
    )

    .when('/contact/:itemID',
      {
        templateUrl: '/views/newitem.htm',
        controller: 'NewContactController'
      }
    )

    .otherwise({
        templateUrl: '/views/allcontacts.htm',
        controller: 'AllContactsController'
    })
}