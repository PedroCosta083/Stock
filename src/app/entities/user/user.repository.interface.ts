import User from "./user.entities";
export interface UserRepositoryInterface{
    findById(id : string) : Promise<User>;
    findByLogin(login : string) : Promise<User>
    findAllByName(name :string) : Promise<User>
    findAll(): Promise<User[]>;
}