export class Profile {
    uuid = "";
    username = "";
    avatar = ""
    age = 25
}

export class User extends Profile {
    isAuth = () => this.uuid.length > 0;
}
