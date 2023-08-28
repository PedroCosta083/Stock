import User from "./user.entities";
export interface UserRepository{
    findById(id : string): Promise<User>;
    findAll(): Promise<User[]>;
}