const UserGreeting = (User) => {
    if (User.AllowGreeting) {
        console.log(User.Message + " " + User.User);
        return;
    }
    console.log("User can not be greeted");
};
const user1 = {
    Message: "Allo",
    User: "Pitro",
    AllowGreeting: true
};
const user2 = {
    Message: "Hi",
    User: "Jopa",
    AllowGreeting: false
};
UserGreeting(user1);
UserGreeting(user2);
