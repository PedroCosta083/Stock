export default interface BaseInterface{
    get id (): string;
    get name (): string;
    get description() : string;
    get active(): boolean;
    get createAT(): Date;
    get updateAT(): Date;
    get deactivateAT(): Date;
    addName(name : string) : void;
    removeName() : void;
    activate() : void;
    deactivate() : void;
    validate() : void;
}