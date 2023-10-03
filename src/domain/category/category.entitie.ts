import CategoryInterface from "./category.interface";
import Base, { BaseProps } from "../base/base.entitie";
import SubCategory from "../subcategory/subcategory.entitie";

export type CategoryProps = BaseProps &{
    subCategory?:SubCategory[];
}

export default class Category extends Base implements CategoryInterface{
    private _subCategory : SubCategory[];
        constructor(props:CategoryProps){
            super(props)
            this._subCategory = props.subCategory || [];
        }
    get subCategory(): SubCategory[] {
        return this._subCategory;
    }
    AddSubcategoryToCategory(arraySubCategory: SubCategory[]):void{
        if (arraySubCategory.length === 0) {
            throw new Error("There are no Sub Category to add");
          }
          this._subCategory = this._subCategory.concat(arraySubCategory);
    }
    removeSubcategoryFromCategory(arraySubcategory:SubCategory[]):void{
        if (arraySubcategory.length === 0) {
            throw new Error("There are no Sub Categories to remove");
        }
    
        this._subCategory = this._subCategory.filter((subCat) => {
            return !arraySubcategory.includes(subCat);
        });
    }
}