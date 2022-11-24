import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../model/category.model';

@Pipe({
  name: 'orderByP'
})
export class OrderByPipe implements PipeTransform {

  transform(categories:Category[],field:string):Category[] {
    categories.sort((a: any, b: any) => {
    if (a[field] < b[field]) {
      return -1;
    } else if (a[field] > b[field]) {
      return 1;
    } else {
      return 0;
    }
  });
  return categories;
  }

}
