import SubCategory from "../subcategory/subcategory.entitie";

export default interface CategoryInterface{
    get subCategory():SubCategory[];
    addSubcategory(subCategory: SubCategory[]):void;
}