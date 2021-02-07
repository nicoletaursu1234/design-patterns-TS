import UserBuilder from "./Builder.js";
export default () => {
    const builder = new UserBuilder();
    builder.setFirstName("Nicoleta");
    builder.setLastName("Ursu");
    builder.setAdmin(true);
    console.log(builder);
};
//# sourceMappingURL=index.js.map