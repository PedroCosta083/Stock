import SubCategory from "../subcategory/subcategory.entitie";

export default interface CategoryInterface{
    get subCategory():SubCategory[];
    AddSubcategoryToCategory(subCategory: SubCategory[]):void;
    removeSubcategoryFromCategory(subCategory: SubCategory[]):void;
}