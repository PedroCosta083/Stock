import SubCategory from "../subcategory/subcategory.entity";
import Category, { CategoryProps } from "./category.entity";

// Função utilitária para criar uma instância de Category com subcategorias de teste
function createCategoryWithSubcategories(subcategories: SubCategory[]): Category {
  const categoryProps: CategoryProps = {
    description:'Descrição',
    subCategory:subcategories,
  };
  return new Category(categoryProps);
}

describe("Category validation", () => {
  it("should create a Category instance with no subcategories", () => {
    const category = new Category({
      description:'Descrição',
    });
    expect(category.subCategory).toEqual([]);
  });

  it("should create a Category instance with subcategories", () => {
    const subcategories = [
      new SubCategory({
        categoryId:'1232132',
        description:'descrição',
      }), 
      new SubCategory({
        categoryId:'1232132',
        description:'descrição',
      })];
    const category = createCategoryWithSubcategories(subcategories);
    expect(category.subCategory).toEqual(subcategories);
  });

  it("should add subcategories to Category", () => {
    const category = new Category({
      description:'Descrição'});
    const subcategories = [
      new SubCategory({
        categoryId:'1232132',
        description:'descrição',
      }), 
      new SubCategory({
        categoryId:'1232132',
        description:'descrição',
      })];
    category.AddSubcategoryToCategory(subcategories);
    expect(category.subCategory).toEqual(subcategories);
  });

  it("should remove subcategories from Category", () => {
    const subcategories = [
      new SubCategory({
        categoryId:'312312',
        description:'descrição'
    }), 
      new SubCategory({
        categoryId:'312312',
        description:'descrição'
      })];
    const category = createCategoryWithSubcategories(subcategories);

    const subcategoriesToRemove = [subcategories[0]]; // Removing the first subcategory
    category.removeSubcategoryFromCategory(subcategoriesToRemove);

    expect(category.subCategory).toEqual([subcategories[1]]);
  });

  it("should throw an error when adding no subcategories", () => {
    const category = new Category({description:'Description'});
    expect(() => category.AddSubcategoryToCategory([])).toThrow("There are no Sub Category to add");
  });

  it("should throw an error when removing no subcategories", () => {
    const category = new Category({description:'Description'});
    expect(() => category.removeSubcategoryFromCategory([])).toThrow("There are no Sub Categories to remove");
  });
});
