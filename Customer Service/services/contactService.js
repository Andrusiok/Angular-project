phonecatApp.service('contactService', function($q, $http){
  var contacts = [
    new User('Andrew', 'Dowe', new Date(1996, 12, 17).toDateString (), '293460945', 'Home', 'male', 'ldkfldfkdl', 0),
    new User('Ann', 'Bracket', new Date(1996, 08, 26).toDateString (), '291811654', 'Work', 'female', 'ldkfldfkdl', 1),
    new User('John', 'Bracket', new Date(1991, 10, 06).toDateString (), '292156412', 'Work', 'male', 'ldkfldfkdl', 2)
  ];

  var favourites = [
      new User('Andrew', 'Dowe', new Date(1996, 12, 17).toDateString (), '293460945', 'Home', 'male', 'ldkfldfkdl', 0),
      new User('John', 'Bracket', new Date(1991, 10, 06).toDateString (), '292156412', 'Work', 'male', 'ldkfldfkdl', 2)
  ];

  var findFirstIndex = function(contact, list){
    for (let i = 0; i < list.length; i++){ 
        let result = list[i].isEqualTo(contact);

        if (result) return i;
    }

    return -1;
  }

  this.getContacts = function(){
      return contacts;
  }

  this.getFavourites = function(){
      return favourites;
  }

  this.findFirstIndex = findFirstIndex;

  this.addContact = function(contact){
      return $q(function(resolve, reject){
          try {
              contact.id = contacts.length;
              contacts.push(contact);
              resolve("OK");
          } catch (error){
              reject("Error occured");
          }
      });
  }

  this.addFavourite = function(contact){
      favourite.push(contact);
  }

  this.editContact = function(contact){
      return $q(function(resolve, reject){
          try {
              var favouriteIndex = findFirstIndex(contact, favourites)
              contacts[contact.id] = contact; 

              if (favouriteIndex > -1){
                  favourites[favouriteIndex] = contact;
              }
              resolve("OK");
          } catch (error){
              reject("Error occured");
          }
      });     
  }
})