export class User {
    uuid = "";
    
    isAuth = () => this.uuid.length > 0;
}
