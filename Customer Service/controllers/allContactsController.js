phonecatApp.controller('allContactsController', function contactListController($scope, contactService) {
  $scope.contacts = contactService.getContacts();

  $scope.favourites = contactService.getFavourites();

  $scope.selected = [];

  $scope.checkFavourites = function(contact){
    var favourites = $scope.favourites;

    return contactService.findFirstIndex(contact, favourites) > -1;
  };

  $scope.selectContact = function(contact){
    var index = $scope.selected.indexOf(contact);

    if (index > -1) $scope.selected.splice(index, 1);
    else $scope.selected.push(contact);
  }

  $scope.selectFavourites = function(contact){
    var favourites = $scope.favourites;
    var index = contactService.findFirstIndex(contact, favourites);

    if (index > -1) $scope.favourites.splice(index, 1);
    else $scope.favourites.push(contact);
  }

  $scope.checkSelected = function(){
    return $scope.selected.length === 0;
  }

  $scope.removeSelected = function(){
    var selected = $scope.selected;

    for (let i = 0; i < selected.length; i++){       
      let contactsIndex = contactService.findFirstIndex(selected[i], $scope.contacts);

      if (contactsIndex > -1){
        let favouriteIndex = contactService.findFirstIndex(selected[i], $scope.favourites);
        $scope.contacts.splice(contactsIndex, 1);

        if (favouriteIndex > -1){
          $scope.favourites.splice(favouriteIndex, 1);
        }        
      }
    }

    $scope.selected = [];
  }
});