import SubCategory from "./subcategory.entitie";

export default interface SubCategoryRepositoryInterface{
    add(subCategory: SubCategory) : Promise<void>;
    findById(subCategoryId : string) : Promise<SubCategory>;
    findAll():Promise<SubCategory[]>;
}