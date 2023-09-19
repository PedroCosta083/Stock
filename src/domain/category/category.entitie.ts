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
    AddSubcategoryToCategory(subCategory: SubCategory[]):void{
        if (subCategory.length === 0) {
            throw new Error("There are no Sub Category to add");
          }
          this._subCategory = this._subCategory.concat(subCategory);
    }
    removeSubcategoryFromCategory(subCategory: SubCategory[]):void{
        if(this._subCategory.length === 0){
            throw new Error("There are no Sub Category to remove");
        }
        if(subCategory.length === 0){
            throw new Error("There are no Sub Category to remove");
        }
        this._subCategory.map((subCategorys,index) => {
           subCategory.map((subCategoryToRemove)=>{
            if(subCategorys.id === subCategoryToRemove.id){
                this._subCategory.splice(index,1);
            }
           })
        })
    }

}