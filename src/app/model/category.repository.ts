import { Injectable, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { RestService } from "./rest.service";

@Injectable()
export class CategoryRepository implements OnInit {
    private categories: Category[]=[];

    constructor(private restService:RestService){
        this.restService
        .getCategories()
        .subscribe(categories=>this.categories=categories)
    }
    
    ngOnInit() {}
    getCategory(code:string):Category | undefined{
        return this.categories.find(i=> i.code ===code);
    }
    getCategories():Category[]{
        return this.categories;
    }
}