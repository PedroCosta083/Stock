import { AddCategoryInputDTO } from "./application/UseCases/categoryUseCase/addCategory.UseCase";
import Category from "./domain/category/category.entitie"
import SubCategory from "./domain/subcategory/subcategory.entitie";

const input : AddCategoryInputDTO = {name:"Alimentação",description:"Alimentos"}

const invalidSubcategory = new SubCategory({
    categoryId:'',
    description:'Category Description',
})