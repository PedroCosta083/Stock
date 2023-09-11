import {PrismaClient} from '@prisma/client'
import Category from "../../domain/category/category.entitie";
import Product from "../../domain/product/product.entities";
import ProductRepositoryInterface from "../../domain/product/product.repository.interface";
import SubCategory from "../../domain/subcategory/subcategory.entitie";

const prisma = new PrismaClient();

export default class PrismaProductRepository implements ProductRepositoryInterface{
    private products:Product[]=[];
    private subcategories: SubCategory[]=[];
    private categories: Category[]=[];

    async findById(id: string): Promise<Product | undefined> {
        return this.products.find(product => product.id === id); 
    }
    async findAllBySubcategory(subCategoryId: string): Promise<Product[]> {
        return this.products.filter(product => product.subCategoryId === subCategoryId); 
    }
    async findAllByCategory(categoryId: string): Promise<Product[]> {
        const productsInCategory = this.products.filter(product => {
            const subcategory = this.subcategories.find(sub => sub.id === product.subCategoryId)
            if(subcategory){
                const category = this.categories.find(cat => cat.id === subcategory.categoryId)
                return category?.id === categoryId;
            }
            return false;
        });
        return productsInCategory;
    }
    async findAllByDescription(description: string): Promise<Product[]> {
        return this.products.filter(product => product.description === description); 
    }
    async findAllByBatch(batch: string): Promise<Product[]> {
        return this.products.filter(product => product.batch === batch); 
    }
    async findAll(): Promise<Product[]> {
        return this.products; 
    }
    async save(product: Product): Promise<void> {
        this.products.push(product) 
    }
    async update(product: Product): Promise<void> {
        this.products 
    }
    async deactivate(product: Product): Promise<void> {
        this.products 
    }
    
}