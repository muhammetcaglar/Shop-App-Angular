import { ChangeDetectorRef, Component, NgZone } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { Category } from "../model/category.model";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
  selector: 'shop',
  templateUrl: 'shop.component.html',
  styles:[`.pt-50{padding-top:50px}`]
})
export class ShopComponent{
  public selectedCategory:Category | null=null;
  public productsPerPage=3;
  public selectedPage=1;
  public selectedProducts:Product[]=[];

  public selectedCategoryTurkish: any;
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository:CategoryRepository,
    private cart: Cart,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private zone: NgZone
    ){}

    get products(): Product[]{
      let index = (this.selectedPage-1)*this.productsPerPage;
      this.selectedProducts=this.productRepository
      .getProducts(this.selectedCategory);
      return  this.selectedProducts
                .slice(index,index + this.productsPerPage);
    }

    private translationMap: { [key: string]: string } = {
      'phone': 'Telefon',
      'computer': 'Bilgisayar',
      'electronic': 'Elektronik'

    };
    getTranslatedCategoryName(categoryName: string): string {

      return this.translationMap[categoryName.toLowerCase()] || categoryName;
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
      this.selectedPage=1;

      this.zone.run(() => {
        this.cdr.detectChanges();
      });
    }
    changePage(x: number){
        this.selectedPage=x;
    }
    changePageSize(size:number | undefined) : void{
      if (size !== undefined) {
        this.productsPerPage = size;
        this.changePage(1);
      }

    }
    parseNumber(value: string | undefined): number | undefined {
      return value ? +value : undefined;
    }


    addProductToCart(product:Product){
          this.cart.addItem(product);
          this.router.navigateByUrl('/cart');
    }
}
