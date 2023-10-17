import ProductInterface from './product.interface';
import Base, { BaseProps } from '../base/base.entity';

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
            this.validateProduct();
        }
    
    validateProduct(){
        if(typeof this._subCategoryId !== 'string' || this._subCategoryId === null || this._subCategoryId.trim() === ''){
            throw new Error("SubCategory ID cannot be null or empty and must be a string")
        }
        if (typeof this._batch !== 'string' || this._batch === null || this._batch.length === 0){
            throw new Error("Batch field cannot be null or empty and must be a string.");
        }
        if (!(this._expirationDate instanceof Date)) {
            throw new Error('Expiration Date is required and must be an instance of Date.');
          }
        if (!(this._manufacturingDate instanceof Date)) {
        throw new Error('Manufacturing Date is required and must be an instance of Date.');
        }
        if (this._expirationDate <= this._manufacturingDate) {
            throw new Error('The expiration date must be after the manufacturing date.');
          }
        if (typeof this._price !== 'number' || isNaN(this._price)) {
        throw new Error('Price is required and must be a valid number.');
        }
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