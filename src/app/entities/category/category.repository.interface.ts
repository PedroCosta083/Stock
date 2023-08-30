import Category from "./category.entitie";

export default interface CategoryRepositoryInterface{
    add(category:Category) : Promise<void>;
    findById(categoryId : string) : Promise<Category>;
    findAllCategoryAndSubcategory(categoryId:string):Promise<Category[]>
}