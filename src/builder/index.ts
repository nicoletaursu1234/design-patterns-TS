import UserBuilder from "./Builder.js";

export default () => {
  const userBuilder = new UserBuilder();

  userBuilder.setFirstName("Nicoleta");
  userBuilder.setLastName("Ursu");
  userBuilder.setAdmin(true);
  console.log(userBuilder.build());

  console.log(userBuilder);
};
