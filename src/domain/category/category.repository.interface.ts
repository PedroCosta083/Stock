import SubCategory from "../subcategory/subcategory.entity";
import Category from "./category.entity";

export default interface CategoryRepositoryInterface{
    add(category:Category) : void;
    update(category:Category): void;
    activate(categoryId :string):void;
    deactivate(categoryId : string) : Promise<void>;
    findById(categoryId : string) : Promise<Category>;
    findAll() : Promise<Category[]>;
    findAllCategoryAndSubcategory(categoryId:string):Promise<Category[]>
    AddSubcategoryToCategory(subCategory: SubCategory[]):void;
    removeSubcategory(subCategory: SubCategory[]):void;
}