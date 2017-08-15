phonecatApp.controller('newContactController', function newContactController($scope, $routeParams, $location, contactService, dateFilter) {
  var item = contactService.getContacts()[$routeParams.itemID];
  var edit = ($routeParams.edit == 'true')

  var getKeyByValue = function(value) {
    for(let i=0; i< $scope.options.length; i++) {
        if ($scope.options[i].value === value){
          return $scope.options[i].optionID;
        }
    }

    return 0; 
  }

  var getValueByKey = function(key)
  {
    for(let i=0; i< $scope.options.length; i++) {
        if ($scope.options[i].optionID === key){
          return $scope.options[i].value;
        }
    }

    return 0;
  }

  var getContact = function(){
    if (edit) {
      return {
        firstName: item.firstName,    
        lastName: item.lastName,
        birthDate: dateFilter(new Date(item.dateOfBirth),
        'yyyy-MM-dd'), phoneNumber: item.phoneNumber,
        optionID: getKeyByValue(item.contactType),
        description: item.description,
        gender: item.gender
      }
    }

    return {}
  }


  var checkDate = function(date){
      var empty = date === undefined || date === null;
      var result = date < new Date();
      return !empty && result;
  }

  $scope.options = [
    {optionID: 1, value: 'Home'},
    {optionID: 2, value: 'Work'},
    {optionID: 3, value: 'Other'}
  ];

  $scope.contact = getContact();

  $scope.isErrorFirstName = false;
  $scope.isErrorLastName = false;
  $scope.isErrorDate = false;
  $scope.isErrorPhone = false;
  $scope.isErrorOption = false;
  $scope.isErrorGender = false;

  $scope.validateForm = function(){
      var isError = false;
      var promise = null;
      var newContact = null;
      var contact = $scope.contact;

      $scope.isErrorFirstName = $scope.contactForm.firstName.$invalid;
      $scope.isErrorLastName = $scope.contactForm.lastName.$invalid;
      $scope.isErrorDate = !checkDate(contact.dateOfBirth);
      $scope.isErrorPhone = $scope.contactForm.phone.$invalid;
      $scope.isErrorOption = $scope.contactForm.options.$invalid;
      $scope.isErrorGender = $scope.contactForm.gender.$invalid;

      isError = $scope.isErrorFirstName || $scope.isErrorLastName ||
                $scope.isErrorDate || $scope.isErrorPhone ||
                $scope.isErrorOption || $scope.isErrorGender;

      if (!isError){
        newContact = new User(contact.firstName,
           contact.lastName,
           contact.dateOfBirth.toDateString(),
           contact.phoneNumber,
           getValueByKey(contact.optionID),
           contact.gender,
           contact.description)
        if (edit){
          newContact.id = item.id;
          promise = contactService.editContact(newContact);
        } else{
          promise = contactService.addContact(newContact);
        }

        promise.then(function(resolve){
          $location.url('/all');
        }, function(reject){
          $scope.isErrorFirstName = true;
        })
      }
  }
});