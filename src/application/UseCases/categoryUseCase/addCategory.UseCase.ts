import BaseUseCaseInterface from "../../entities/base/base.usecase.interface";
import Category from "../../entities/category/category.entitie";
import CategoryRepositoryInterface from "../../entities/category/category.repository.interface";

export default class AddCategoryUseCase implements BaseUseCaseInterface{
    private _categoryRepository : CategoryRepositoryInterface
    constructor(categoryRepository : CategoryRepositoryInterface){
        this._categoryRepository = categoryRepository;
    }

    async execute(input: {description:string}): Promise<Category> {
        const newCategory = new Category(input);
        await this._categoryRepository.add(newCategory);
        return newCategory;
    }
    
}