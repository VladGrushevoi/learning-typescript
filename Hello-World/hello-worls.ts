interface Greeting {
    Message: string,
    User: string,
    AllowGreeting: boolean
}

const UserGreeting = (User : Greeting) => {
    if(User.AllowGreeting){
        console.log(User.Message + " " + User.User);
        return;
    }

    console.log("User can not be greeted");
}

let user1 = {
    Message: "Allo",
    User: "Pitro",
    AllowGreeting: true
}
let user2 = {
    Message: "Hi",
    User: "Jopa",
    AllowGreeting: false
}

UserGreeting(user1);
UserGreeting(user2);