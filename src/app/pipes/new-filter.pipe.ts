import { Pipe, PipeTransform } from '@angular/core';
import { New } from '../model/new.model';

@Pipe({
  name: 'newFilter'
})
export class NewFilterPipe implements PipeTransform {

  transform(news:New[],filterText:string):New[] {
    filterText= filterText.toLowerCase();
  
    return filterText? news.filter((n:New)=> 
                      n.headline?.toLowerCase().indexOf(filterText)!==-1||
                      n.category?.toLowerCase().indexOf(filterText)!==-1 ): news;
  }

}
