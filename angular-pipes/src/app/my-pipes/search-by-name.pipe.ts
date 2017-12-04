import { Pipe, PipeTransform } from '@angular/core';

// {{ variable | searchByName:"thanks" }}
@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(fullArray: any[], searchTerm: string): any[] {
    // return empty array if there is no array (just in case)
    if (!fullArray) {
      return [];
    }

    // return the full array if there's no search term
    if (!searchTerm) {
      return fullArray;
    }

    // const searchRegEx = new RegExp(searchTerm, "i");

    // Loop to filter through the items
    const filteredArray = [];

    fullArray.forEach((oneItem) => {
      // keep the item if the name has the search term
      if(oneItem.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        filteredArray.push(oneItem);
      }
    });

    return filteredArray;

    // PRO WAY
    // return fullArray.filter(oneItem => oneItem.name.includes(searchTerm))
  }

}
