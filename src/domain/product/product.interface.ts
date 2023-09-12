export default interface ProductInterface{
    get subCategoryId(): string;
    get batch(): string;
    get expirationDate(): Date;
    get manufacturingDate(): Date;
    get price(): number;
    validateProduct():void;
}