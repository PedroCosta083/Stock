import BaseUseCaseInterface from "../../../domain/base/base.usecase.interface";
import Category from "../../../domain/category/category.entity";
import CategoryRepositoryInterface from "../../../domain/category/category.repository.interface";

export interface DeactivateCategoryInputDTO {
  id: string;
}
export interface DeactivateCategoryOutputDTO {
  deactivate:void
}

export default class ActiveCategoryUseCase implements BaseUseCaseInterface {
  private _categoryRepository: CategoryRepositoryInterface;
  constructor(categoryRepository: CategoryRepositoryInterface) {
    this._categoryRepository = categoryRepository;
  }

  async execute(
    input: DeactivateCategoryInputDTO
  ): Promise<DeactivateCategoryOutputDTO> {
    const deactivateCategory = await this._categoryRepository.deactivate(input.id);
    const output: DeactivateCategoryOutputDTO = {
      deactivate:deactivateCategory,
    };
    return output;
  }
}
