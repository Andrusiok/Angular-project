phonecatApp.controller('FavouritesController', FavouritesController);

function FavouritesController($scope, contactService) {
  $scope.contacts = contactService.getContacts();

  $scope.favourites = _.where($scope.contacts, {favourite: true});
};