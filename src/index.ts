import { AddCategoryInputDTO } from "./application/UseCases/categoryUseCase/addCategory.UseCase";
import Category from "./domain/category/category.entitie"

const input : AddCategoryInputDTO = {name:"Alimentação",description:"Alimentos"}

const category = new Category(
    input
);

console.log(category)