export default interface BaseInterface{
    get id (): string;
    get description() : string;
    get active(): boolean;
    get createAT(): Date;
    get updateAT(): Date;
    get deactivateAT(): Date;
    activate() : void;
    deactivate() : void;
}