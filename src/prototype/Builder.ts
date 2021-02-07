import User from "../builder/User.js";

interface ICloneable {
  clone: () => User;
}

export default class UserBuilder implements ICloneable {
  firstName = ""
  lastName = ""
  gender = ""
  age = 0
  address = ""
  country = ""
  isAdmin = false

  constructor(){
      
  }

  setFirstName(firstName : string){
      this.firstName = firstName
  }

  setLastName(lastName : string){
      this.lastName = lastName
  }

  setGender(gender : string){
      this.gender = gender
  }

  setAge(age : number){
      this.age = age
  }

  setAddress(address : string){
      this.address = address
  }

  setCountry(country : string){
      this.country = country
  }
 
  setAdmin(isAdmin : boolean){
      this.isAdmin = isAdmin
  }

  build() : User {
      return new User(this)
  }

  getAllValues(){
      return this
  }

  clone() : UserBuilder {
    return Object.assign({}, this)
  }

}
