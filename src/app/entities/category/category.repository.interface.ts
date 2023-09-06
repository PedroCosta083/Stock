import Category from "./category.entitie";

export default interface CategoryRepositoryInterface{
    add(category:Category) :void;
    update(category:Category): Promise<void>;
    deactivate(categoryId : string) : Promise<void>;
    findById(categoryId : string) : Promise<Category>;
    findAll() : Promise<Category[]>;
    findAllCategoryAndSubcategory(categoryId:string):Promise<Category[]>
}