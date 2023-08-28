import { randomUUID } from 'crypto'
import ProductInterface from './product.interface';

export type productProps ={
    productId : string;
    subCategoryId : string;
    description : string;
    batch : string;
    expirationDate : Date;
    manufacturingDate : Date;
    price : number;
    createAT: Date;
    updateAT: Date;
    deactivateAT: Date;
}

export default class Product implements ProductInterface{
    private _productId : string;
    private _subCategoryId :string;
    private _description : string;
    private _batch : string;
    private _expirationDate : Date; 
    private _manufacturingDate : Date;
    private _price : number;
    private _createAT : Date;
    private _updateAT : Date;
    private _deactvateAT : Date;

        constructor(props:productProps){
            this._productId = props.productId || randomUUID();
            this._subCategoryId = props.subCategoryId;
            this._description = props.description ;
            this._batch = props.batch ;
            this._expirationDate = props.expirationDate || new Date(); 
            this._manufacturingDate = props.manufacturingDate || new Date() ;
            this._price = props.price ;
            this._createAT = props.createAT || new Date();
            this._updateAT =  props.updateAT || new Date();
            this._deactvateAT =  props.deactivateAT || new Date();

        }
    
    get productId(): string {
        return this._productId;
    }
    get subCategoryId(): string {
        return this._subCategoryId;
    }
    get description(): string {
        return this._description;
    }
    get batch(): string {
        return this._batch;
    }
    get expirationDate(): Date {
        return this._expirationDate;
    }
    get manufacturingDate(): Date {
        return this._manufacturingDate;
    }
    get price(): number {
        return this._price
    }
    get createAT(): Date {
        return this._createAT;
    }
    get updateAT(): Date {
        return this._updateAT;
    }
    get deactivateAT(): Date {
        return this._deactvateAT;
    }
}