export default interface UserInterface {
    get id() : string;
    get name() : string;
    get birthday () : Date;
    get login() : string;
    get password():string;
    get email():string;
   
    validateUser():void;
}