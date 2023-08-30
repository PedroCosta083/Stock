import Product from "./product.entities";
export default interface ProductRepositoryInterface {
    findById(id : string): Promise<Product>;
    findAllBySubcategory(subCategoryId : string) : Promise<Product[]>;
    findAllByCategory(categoryId : string) : Promise<Product[]>;
    findAllByDescription(description : string) : Promise<Product[]>;
    findAllByBatch(batch : string) : Promise<Product[]>;
    findAll(): Promise<Product[]>;
    save(product : Product) : Promise<void>;
    update(product : Product) : Promise<void>;
    deactivate(product : Product) : Promise<void>;
}