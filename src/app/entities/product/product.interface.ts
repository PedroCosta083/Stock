export default interface ProductInterface{
    get productId(): string;
    get subCategoryId(): string;
    get description(): string;
    get batch(): string;
    get expirationDate(): Date;
    get manufacturingDate(): Date;
    get price(): number;
    get createAT(): Date;
    get updateAT(): Date;
    get deactivateAT(): Date;
}