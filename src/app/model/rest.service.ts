import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { Details } from './details.model';
import { New } from './new.model';

@Injectable()
export class RestService {

  baseUrl:string="https://dev.matrikswebtrader.com/training/homework/assets/dummy-service/"

  constructor(private http: HttpClient) { }
  getNews(): Observable<New[]>{
    return this.http.get<New[]>(this.baseUrl+ 'default.asp?type=newsHeader');
  }
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl+ 'default.asp?type=newsCategory');
  }
  getDetails(id:number):Observable<Details>{
    return this.http.get<Details>(this.baseUrl+ 'newsDetail.asp?id=' + id);
  }
  
}
