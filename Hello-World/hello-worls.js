var UserGreeting = function (User) {
    if (User.AllowGreeting) {
        console.log(User.Message + " " + User.User);
        return;
    }
    console.log("User can not be greeted");
};
var user1 = {
    Message: "Allo",
    User: "Pitro",
    AllowGreeting: true
};
var user2 = {
    Message: "Hi",
    User: "Jopa",
    AllowGreeting: false
};
UserGreeting(user1);
UserGreeting(user2);
