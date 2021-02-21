import User from "./User.js";
export default class UserBuilder {
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.gender = "";
        this.age = 0;
        this.address = "";
        this.country = "";
        this.isAdmin = false;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    setGender(gender) {
        this.gender = gender;
    }
    setAge(age) {
        this.age = age;
    }
    setAddress(address) {
        this.address = address;
    }
    setCountry(country) {
        this.country = country;
    }
    setAdmin(isAdmin) {
        this.isAdmin = isAdmin;
    }
    build() {
        return new User(this);
    }
    getAllValues() {
        return this;
    }
}
//# sourceMappingURL=Builder.js.map