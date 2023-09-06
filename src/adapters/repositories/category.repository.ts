import { PrismaClient } from "@prisma/client";
import Category from "../../app/entities/category/category.entitie";
import CategoryRepositoryInterface from "../../app/entities/category/category.repository.interface";

const prisma = new PrismaClient();

export default class CategoryRepository implements CategoryRepositoryInterface{
    add(category: Category): void {
        try {
            prisma.category.create({
                data:{
                    id:category.id,
                    description:category.description,
                    active:category.active,
                    createAt:category.createAT,
                    deactivateAt:category.deactivateAT,
                    
                    updateAt:category.updateAT
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    update(category: Category): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deactivate(categoryId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(categoryId: string): Promise<Category> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Category[]> {
        throw new Error("Method not implemented.");
    }
    findAllCategoryAndSubcategory(categoryId: string): Promise<Category[]> {
        throw new Error("Method not implemented.");
    }
}