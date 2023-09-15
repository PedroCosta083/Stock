import SubCategory from "./subcategory.entitie"

describe('SubCategory Validation',()=>{
    it('Category ID must be null or empty and must be a string',()=>{
        const invalidSubcategory = () => new SubCategory({
            categoryId:'',
            description:'Category Description',
        })
        expect(invalidSubcategory).toThrowError('Category ID cannot be null or empty and must be a string')
    })
})