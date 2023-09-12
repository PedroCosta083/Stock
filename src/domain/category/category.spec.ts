import Category from "./category.entitie"

describe('Category Validation', () =>{
    it('Description must be a non-empty string', () => {
        const invalidCategory = () => new Category({
          description:'',
        });
        expect(invalidCategory).toThrowError('Description field cannot be null/empty or exceed 20 characters and must be string');
      });
    it('Valid product should not throw any errors', () => {
    const validSubcategory = () => new Category({
        description: 'Category description',
    });
    expect(validSubcategory).not.toThrow();
    });
})