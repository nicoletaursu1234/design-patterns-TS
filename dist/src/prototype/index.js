import UserBuilder from './Builder.js';
export default () => {
    const user1 = new UserBuilder();
    user1.setFirstName('Nicoleta');
    user1.setAdmin(true);
    const user2 = user1.clone().getAllValues();
    const user3 = user2;
    console.log('User1:', user1);
    console.log('User2:', user2);
    console.log('User3:', user3);
    console.log(user1 === user2);
    console.log(user2 == user3);
    console.log(user1.firstName === user2.firstName);
};
//# sourceMappingURL=index.js.map