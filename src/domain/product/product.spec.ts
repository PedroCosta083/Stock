import Product from "./product.entity";

describe('Product Validation', () => {
  it('SubCategory ID must be a non-empty string', () => {
    const invalidProduct = () => new Product({
      subCategoryId: '',
      batch: 'batch123',
      expirationDate: new Date(),
      manufacturingDate: new Date(),
      price: 10.99,
      description: 'Product description',
    });
    expect(invalidProduct).toThrowError('SubCategory ID cannot be null or empty and must be a string');
  });

  it('Batch field must be a non-empty string', () => {
    const invalidProduct = () => new Product({
      subCategoryId: 'subCat123',
      batch: '',
      expirationDate: new Date(),
      manufacturingDate: new Date(),
      price: 10.99,
      description: 'Product description',
    });
    expect(invalidProduct).toThrowError('Batch field cannot be null or empty and must be a string.');
  });

  it('Expiration Date must be a valid Date instance', () => {
    const invalidProduct = () => new Product({
      subCategoryId: 'subCat123',
      batch: 'batch123',
      expirationDate: 'invalidDate' as any,
      manufacturingDate: new Date(),
      price: 10.99,
      description: 'Product description',
    });
    expect(invalidProduct).toThrowError('Expiration Date is required and must be an instance of Date.');
  });

  it('Manufacturing Date must be a valid Date instance', () => {
    const invalidProduct = () => new Product({
      subCategoryId: 'subCat123',
      batch: 'batch123',
      expirationDate: new Date(),
      manufacturingDate: 'invalidDate' as any,
      price: 10.99,
      description: 'Product description',
    });
    expect(invalidProduct).toThrowError('Manufacturing Date is required and must be an instance of Date.');
  });

  it('Expiration Date must be after Manufacturing Date', () => {
    const invalidProduct = () => new Product({
      subCategoryId: 'subCat123',
      batch: 'batch123',
      expirationDate :  new Date('2023-09-15'),
      manufacturingDate : new Date('2023-09-20'),
      price: 10.99,
      description: 'Product description',
    });
    expect(invalidProduct).toThrowError('The expiration date must be after the manufacturing date.');
  });

  it('Price must be a valid number', () => {
    const invalidProduct = () => new Product({
      subCategoryId: 'subCat123',
      batch: 'batch123',
      expirationDate: new Date('2023-09-21'),
      manufacturingDate: new Date('2023-09-20'),
      price: 'invalidPrice' as any,
      description: 'Product description',
    });
    expect(invalidProduct).toThrowError('Price is required and must be a valid number.');
  });


  it('Valid product should not throw any errors', () => {
    const validProduct = () => new Product({
      subCategoryId: 'subCat123',
      batch: 'batch123',
      expirationDate: new Date('2023-09-15'),
      manufacturingDate: new Date('2023-09-10'),
      price: 10.99,
      description: 'Product description',
    });
    expect(validProduct).not.toThrow();
  });
});
