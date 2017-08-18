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
  this.favourite = false;

  this.isEqualTo = function(user){
    return this.id === user.id;
  }
}
