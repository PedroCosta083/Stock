import BaseUseCaseInterface from "../../../domain/base/base.usecase.interface";
import Category from "../../../domain/category/category.entity";
import CategoryRepositoryInterface from "../../../domain/category/category.repository.interface";

export interface ActivateCategoryInputDTO {
  id: string;
}
export interface ActivateCategoryOutputDTO {
  active:void
}

export default class ActiveCategoryUseCase implements BaseUseCaseInterface {
  private _categoryRepository: CategoryRepositoryInterface;
  constructor(categoryRepository: CategoryRepositoryInterface) {
    this._categoryRepository = categoryRepository;
  }

  async execute(
    input: ActivateCategoryInputDTO
  ): Promise<ActivateCategoryOutputDTO> {
    const activateCategory =  this._categoryRepository.activate(input.id);
    const output: ActivateCategoryOutputDTO = {
        active:activateCategory,
    };
    return output;
  }
}
