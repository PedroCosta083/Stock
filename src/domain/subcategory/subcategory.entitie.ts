import SubCategoryInterface from "./subcategory.interface";
import Base, { BaseProps } from "../base/base.entitie";

export type SubCategoryProps = BaseProps &{
    categoryId : string;
}

export default class SubCategory extends Base implements SubCategoryInterface{
    private _categoryId : string;
        constructor(props:SubCategoryProps){
            super(props)
            this._categoryId = props.categoryId;
            this.validateSubCategory();
        }
    validateSubCategory(){
        if(typeof this._categoryId !== 'string' || this._categoryId === null || this._categoryId.trim() === ''){
            throw new Error("Category ID cannot be null or empty and must be a string")
        }
    }
    get categoryId(): string {
        return this._categoryId;
    }
}