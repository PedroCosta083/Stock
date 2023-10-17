import BaseUseCaseInterface from "../../../domain/base/base.usecase.interface";
import Category from "../../../domain/category/category.entity";

import CategoryRepositoryInterface from "../../../domain/category/category.repository.interface";

export interface UpdateCategoryInputDTO {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updateAt: Date;
  deactivatedAt: Date;
  categories: Category[];
}

export interface UpdateCategoryOutputDTO {
  category: Category;
}

export default class UpdateCategoryUseCase implements BaseUseCaseInterface {
  private _categoryRepository: CategoryRepositoryInterface;

  constructor(categoryRepository: CategoryRepositoryInterface) {
    this._categoryRepository = categoryRepository;
  }

  async execute(
    input: UpdateCategoryInputDTO
  ): Promise<UpdateCategoryOutputDTO> {
    const categoryIndex = input.categories.findIndex(
      (category) => category.id === input.id
    );
    const timeNow = new Date();
    if (categoryIndex !== -1) {
      const updatedCategory = new Category({
        id: input.id,
        name: input.name,
        description: input.description,
        createAt: input.createdAt,
        updateAt: timeNow,
        deactivateAt: input.deactivatedAt,
      });
      this._categoryRepository.update(updatedCategory);
      const output: UpdateCategoryOutputDTO = {
        category: updatedCategory,
      };
      return output;
    } else {
      throw new Error("Category not found");
    }
  }
}
