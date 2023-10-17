import SubCategory from "../subcategory/subcategory.entity";

export default interface CategoryInterface{
    get subCategory():SubCategory[];
    AddSubcategoryToCategory(arraySubcategory: SubCategory[]):void;
    removeSubcategoryFromCategory(arraySubcategory: SubCategory[]):void;
}