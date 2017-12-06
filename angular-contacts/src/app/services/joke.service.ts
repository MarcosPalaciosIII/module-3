import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JokeService {

  constructor(private httpThang: HttpClient) { }

  getRandomJoke() {
    return this.httpThang.get('https://api.icndb.com/jokes/random')
  }

  getCategories() {
    return this.httpThang.get('https://api.icndb.com/categories');
  }

}
