import Category from "./domain/category/category.entitie";
import Product from "./domain/product/product.entities";
import SubCategory from "./domain/subcategory/subcategory.entitie";

const categoria = new Category({
  description: "Alimentos",
});
const subcategoria = [
  new SubCategory({ categoryId: "1", description: "Cereais" }),
  new SubCategory({ categoryId: "1", description: "Frios" }),
];
const sub1 = new SubCategory({ categoryId: "1", description: "Frios" });
const sub2 = new SubCategory({ categoryId: "1", description: "Quente" });
console.log("Categoria:", categoria);
categoria.AddSubcategoryToCategory([sub1, sub2]);
console.log("Categoria com subcategoria:", categoria);
const removerSubcategoria = [sub1];
categoria.removeSubcategoryFromCategory(removerSubcategoria);
console.log("Removendo subcategoria 'Frios':", categoria);

console.log("|--------------------------------------------------------|");

const produto = new Product({
  batch: "13432",
  description: "Cebola",
  expirationDate: new Date("10/10/2023"),
  manufacturingDate: new Date(),
  price: 10,
  subCategoryId:sub1.id,
});

console.log(produto)
