import SubCategory from "../subcategory/subcategory.entitie";

export default interface CategoryInterface{
    get subCategory():SubCategory[];
    AddSubcategoryToCategory(arraySubcategory: SubCategory[]):void;
    removeSubcategoryFromCategory(arraySubcategory: SubCategory[]):void;
}