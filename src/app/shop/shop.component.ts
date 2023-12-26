import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { Category } from "../model/category.model";
import { Cart } from "../model/cart.model";

@Component({
  selector: 'shop',
  templateUrl: 'shop.component.html',
  styles:[`.pt-50{padding-top:50px}`]
})
export class ShopComponent{
  public selectedCategory:Category | null=null;
  public productsPerPage=3;
  public selectedPage=1;

  constructor(
    private productRepository: ProductRepository,
    private categoryRepository:CategoryRepository,
    private cart: Cart
    ){}

    get products(): Product[]{
      let index = (this.selectedPage-1)*this.productsPerPage;
      return this.productRepository
                .getProducts(this.selectedCategory)
                .slice(index,index + this.productsPerPage);
    }

    get pageNumbers(): number[]{
     return Array(Math.ceil(this.productRepository
        .getProducts(this.selectedCategory)
        .length/this.productsPerPage))
        .fill(0)
        .map((x,i)=>i+1);
    }
    get categories(): Category[] {
      return this.categoryRepository.getCategoies();
    }

    changeCategory(newCategory: Category | null) {
      this.selectedCategory = newCategory;
    }
    changePage(x: number){
        this.selectedPage=x;
    }

    addProductToCart(product:Product){
          this.cart.addItem(product);
    }
}
