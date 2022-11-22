import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { Product } from './product.model';

@Injectable()
export class RestService {

  baseUrl:string="https://dev.matrikswebtrader.com/training/homework/assets/dummy-service/"

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+ 'default.asp?type=newsHeader');
  }
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl+ 'default.asp?type=newsCategory');
  }


}
