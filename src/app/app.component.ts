import { Component } from '@angular/core';
import { Category } from './model/category.model';
import { CategoryRepository } from './model/category.repository';
import { Product } from './model/product.model';
import { ProductRepository } from './model/product.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsSelector';
  constructor(
    private productRepository:ProductRepository,
    private categoryRepository:CategoryRepository
){}

get products():Product[]{
  return this.productRepository.getProducts();
}
get categories(): Category[]{
  return this.categoryRepository.getCategories();

}
}
