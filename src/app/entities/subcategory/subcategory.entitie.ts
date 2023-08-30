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
        }
    get categoryId(): string {
        return this._categoryId;
    }
}