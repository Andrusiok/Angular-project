phonecatApp.controller('AllContactsController', AllContactsController);

function AllContactsController ($scope, $location, contactService) {
  $scope.contacts = contactService.getContacts();

  $scope.selected = [];

  $scope.selectFavourites = function(contact){
    contact.favourite = !contact.favourite;
  }

  $scope.checkSelected = function(){
    return $scope.selected.length === 0;
  }

  $scope.editContact = function(id){
    $location.url('/contact/' + id);
  }

  $scope.createContact = function(){
    $scope.editContact(-1);
  }

  $scope.selectContact = function(contact){
    var index = $scope.selected.indexOf(contact);

    if (index > -1) $scope.selected.splice(index, 1);
    else $scope.selected.push(contact);
  }

  $scope.removeSelected = function(){
    var selected = $scope.selected;

    for (let i = 0; i < selected.length; i++){       
      let index = _.findIndex($scope.contacts, function(contact){
        return contact.isEqualTo(selected[i])
      });

      if (index > -1){
        $scope.contacts.splice(index, 1);    
      }
    }

    $scope.selected = [];
  }
};