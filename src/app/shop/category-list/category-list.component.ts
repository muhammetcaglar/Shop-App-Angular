import { ChangeDetectorRef, Component, EventEmitter, NgZone, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
  public selectedCategory:Category | null=null;
  @Output() category = new EventEmitter<Category>();
  public selectedPage=1;
constructor(
  private cdr: ChangeDetectorRef,
    private zone: NgZone,
  private categoryRepository:CategoryRepository,
){}


ngOnInit(): void {

}
  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }
  private translationMap: { [key: string]: string } = {
    'phone': 'Telefon',
    'computer': 'Bilgisayar',
    'electronic': 'Elektronik'

  };
  getTranslatedCategoryName(categoryName: string): string {

    return this.translationMap[categoryName.toLowerCase()] || categoryName;
  }
  changeCategory(newCategory: Category | null) {
    this.selectedCategory = newCategory;
    this.selectedPage=1;

    if(newCategory!=null)
        this.category.emit(newCategory);


    this.zone.run(() => {
      this.cdr.detectChanges();
    });


  }
}
