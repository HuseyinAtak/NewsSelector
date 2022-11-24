import { NgModule } from "@angular/core";
import {HttpClientModule} from '@angular/common/http';
import { RestService } from "./rest.service";
import { NewsRepository } from "./new.repository";
import { CategoryRepository } from "./category.repository";

@NgModule({
    imports: [HttpClientModule],
    providers:[RestService, NewsRepository, CategoryRepository]
})

export class ModelModule{}