import { randomUUID } from 'crypto'
import ProductInterface from './product.interface';
import Base, { BaseProps } from '../base/base.entitie';

export type productProps = BaseProps &{
    subCategoryId : string;
    batch : string;
    expirationDate : Date;
    manufacturingDate : Date;
    price : number;
    
}

export default class Product extends Base implements ProductInterface{
    
    private _subCategoryId :string;
    private _batch : string;
    private _expirationDate : Date; 
    private _manufacturingDate : Date;
    private _price : number;
        constructor(props:productProps){
            super(props)
            this._subCategoryId = props.subCategoryId;
            this._batch = props.batch ;
            this._expirationDate = props.expirationDate || new Date(); 
            this._manufacturingDate = props.manufacturingDate || new Date() ;
            this._price = props.price ;
            
        }
    
    valdiateProduct(){
        
    }

    get subCategoryId(): string {
        return this._subCategoryId;
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
        return this._price;
    }
    
}