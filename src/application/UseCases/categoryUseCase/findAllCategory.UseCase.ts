import BaseUseCaseInterface from "../../../domain/base/base.usecase.interface";
import Category from "../../../domain/category/category.entity";
import CategoryRepositoryInterface from "../../../domain/category/category.repository.interface";

export interface FindAllCategoryOutputDTO {
  category: Category[];
}

export default class FindAllCategoryUseCase implements BaseUseCaseInterface {
  private _categoryRepository: CategoryRepositoryInterface;
  constructor(categoryRepository: CategoryRepositoryInterface) {
    this._categoryRepository = categoryRepository;
  }

  async execute(): Promise<FindAllCategoryOutputDTO> {
    const findAllCategory = await this._categoryRepository.findAll();
    const output: FindAllCategoryOutputDTO = {
        category: findAllCategory ,
      };
      return output;
  }
}
