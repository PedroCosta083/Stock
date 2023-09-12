import BaseUseCaseInterface from "../../../domain/base/base.usecase.interface";
import Category from "../../../domain/category/category.entitie";
import CategoryRepositoryInterface from "../../../domain/category/category.repository.interface";

export interface AddCategoryInputDTO{
    name : string;
    description : string;
}

export interface AddCategoryOutputDTO{
    category:Category;
}

export default class AddCategoryUseCase implements BaseUseCaseInterface{
    private _categoryRepository : CategoryRepositoryInterface
    constructor(categoryRepository : CategoryRepositoryInterface){
        this._categoryRepository = categoryRepository;
    }

    async execute(input: AddCategoryInputDTO): Promise<AddCategoryOutputDTO> {
        const newCategory = new Category(input);
            this._categoryRepository.add(newCategory);
            const output : AddCategoryOutputDTO = {
                category : newCategory
            }
        return output;
    }
    
}