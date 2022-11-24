import { Injectable, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { New } from "./new.model";
import { RestService } from "./rest.service";

@Injectable()
export class NewsRepository implements OnInit {
    private news: New[]=[];

    constructor(private restService:RestService){
        this.restService
        .getNews()
        .subscribe(news=>this.news=news)
    }
    ngOnInit() {}
    getNew(id:number):New | undefined{
        return this.news.find(i=> i.id ===id);
    }
    getNews(category:Category | null = null):New[]{
        if(category){
            return this.news.filter(n => n.category == category?.code);
        }else{
            return this.news;
        }
    }
}