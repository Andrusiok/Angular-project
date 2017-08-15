var phonecatApp = angular.module('customerService', ['ngRoute']).config(routeConfig);

function User(firstName, lastName, dateOfBirth, phoneNumber, contactType, gender, description, id)
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = firstName + ' ' + lastName;
  this.dateOfBirth = dateOfBirth;
  this.phoneNumber = phoneNumber;
  this.contactType = contactType;
  this.gender = gender;
  this.description = description;
  this.id = id;

  this.isEqualTo = function(user){
    return this.id === user.id;
  }
}

function routeConfig($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/all',
      {
        templateUrl: '/views/allcontacts.htm',
        controller: 'allContactsController'
      })

    .when('/',
    {
      templateUrl: '/views/allcontacts.htm',
      controller: 'allContactsController'
    })

    .when('/favourites',
      {
        templateUrl: '/views/favourites.htm',
        controller: 'favouritesController'
      }
    )

    .when('/edit/:itemID/:edit',
      {
        templateUrl: '/views/newitem.htm',
        controller: 'newContactController'
      }
    )

    .when('/newitem',
      {
        redirectTo: '/edit/-1/false'
      }
    )
    .otherwise({
        templateUrl: '/views/allcontacts.htm',
        controller: 'allContactsController'
    })
}