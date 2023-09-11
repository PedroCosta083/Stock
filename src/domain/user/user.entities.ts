import UserInterface  from "./user.interface"

 export type userProps={
    id : string;
    name : string;
    birthday : Date;
    login : string;
    password : string;
    email : string;
    
}

 export default class User implements UserInterface{
    private _id : string;
    private _name : string;
    private _birthday : Date;
    private _login : string;
    private _password : string;
    private _email : string;
    
    constructor(props:userProps){
        this._id = props.id,
        this._name = props.name,
        this._birthday = props.birthday;
        this._login = props.login;
        this._password = props.password;
        this._email = props.email;
        
        this.validateUser();
    }
     
     
    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get login(): string {
        return this._login;
    }
    get password(): string {
        return this._password;
     }
    get email(): string {
        return this._email;
    }
    get birthday(): Date {
        return this._birthday;
    }

    validateUser(){
        if(this._login.length > 10){
            throw new Error("Do not exceed 10 characters")
        }
    }
}


