import BaseUseCaseInterface from "../../../domain/base/base.usecase.interface";
import Category from "../../../domain/category/category.entity";
import CategoryRepositoryInterface from "../../../domain/category/category.repository.interface";
export interface FindCategoryByIdInputDTO {
  id: string;
}
export interface FindCategoryByIdOutputDTO {
  category: Category;
}

export default class FindCategoryByIdUseCase implements BaseUseCaseInterface {
  private _categoryRepository: CategoryRepositoryInterface;
  constructor(categoryRepository: CategoryRepositoryInterface) {
    this._categoryRepository = categoryRepository;
  }

  async execute(input : FindCategoryByIdInputDTO): Promise<FindCategoryByIdOutputDTO> {
    const findCategoryById = await this._categoryRepository.findById(input.id);
    const output: FindCategoryByIdOutputDTO = {
      category: findCategoryById,
    };
    return output;
  }
}
