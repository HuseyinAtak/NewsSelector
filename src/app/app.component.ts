import { style } from '@angular/animations';
import { R3TargetBinder } from '@angular/compiler';
import { Component } from '@angular/core';
import { Category } from './model/category.model';
import { CategoryRepository } from './model/category.repository';
import { Details } from './model/details.model';
import { New } from './model/new.model';
import { NewsRepository } from './model/new.repository';
import { RestService } from './model/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsSelector';
  public selectedCategory: Category|null = null;
  filterText:string='';
  dateName:any='';
  isDecsOrder:boolean= true;
  details: Details= new Details;
  headers: string ='';

  constructor(
    private newsRepository:NewsRepository,
    private categoryRepository:CategoryRepository,
    private restService : RestService
){}
  


get news():New[]{
  return this.newsRepository.getNews(this.selectedCategory);
}
get categories(): Category[]{
  return this.categoryRepository.getCategories();
}
changeCategory(newCategory:Category | null ){
this.selectedCategory= newCategory;
}

sort(headerName:string){
  this.dateName = headerName;
  this.isDecsOrder = !this.isDecsOrder;
    
}
getDetails(id:any, headers:any){
  this.headers= headers;
  this.restService.getDetails(id).subscribe(x=>this.details=x);
}
}
