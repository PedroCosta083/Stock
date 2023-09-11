import { randomUUID } from "crypto";
import BaseInterface from "./base.interface";

export type BaseProps ={
    id ?: string;
    name ?: string;
    description : string;
    active ?: boolean;
    createAt ?: Date;
    updateAt ?: Date;
    deactivateAt ?: Date;
}

export default class Base implements BaseInterface{
    private _id : string;
    private _name : string;
    private _description : string;
    private _active : boolean;
    private _createAt : Date;
    private _updateAt : Date;
    private _deactivateAt : Date;

        constructor(props: BaseProps){
            this._id = props.id || randomUUID();
            this._name = props.name || "" ;
            this._description = props.description;
            this._active = props.active || true;
            this._createAt = props.createAt || new Date();
            this._updateAt = props.updateAt || new Date();
            this._deactivateAt = props.deactivateAt || new Date();
            this.validate();            
        }

    addName(name: string):void{

        if(name.length === 0){
            throw new Error("Name field cannot be empty")
        }
        if(name.length > 20){
            throw new Error("Name field cannot exceed 20 characters")
        }

        this._name = name;

    }    

    validate():void{

        if(this._id === null || this._id.length === 0){
            throw new Error("Id cannot be null")
        }        
        if(this._description.length > 20){
            throw new Error("Description field cannot exceed 20 characters")
        }
        if(this.active === null){
            throw new Error("Status cannot be null")
        }
        if(this._createAt === null){
            throw new Error("Creation Date cannot be null")
        }
        if(this._updateAt === null){
            throw new Error("Update Date cannot be null")
        }
        if(this._deactivateAt === null){
            throw new Error("Deactivate Date cannot be null")
        }
    }
    activate():void{
        this._active = true;
        this._updateAt = new Date();
    }
    deactivate():void{
        this._active = false;
        this._deactivateAt = new Date();
    }

    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }         
    get description(): string {
        return this._description
    }
    get active(): boolean {
        return this._active;
    }
    get createAT(): Date {
        return this._createAt;
    }
    get updateAT(): Date {
        return this._updateAt;
    }
    get deactivateAT(): Date {
        return this._deactivateAt;
    }
}