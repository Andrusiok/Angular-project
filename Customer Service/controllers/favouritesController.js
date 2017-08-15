phonecatApp.controller('favouritesController', function contactListController($scope, contactService) {
  $scope.contacts = contactService.getContacts();

  $scope.favourites = contactService.getFavourites();
});