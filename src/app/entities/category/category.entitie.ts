import CategoryInterface from "./category.interface";
import Base, { BaseProps } from "../base/base.entitie";

export type CategoryProps = BaseProps &{
}

export default class Category extends Base implements CategoryInterface{
        constructor(props:CategoryProps){
            super(props)
        }
}