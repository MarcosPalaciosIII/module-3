import { Injectable } from '@angular/core';
import { HttpClient } from '@angular//common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

export class Phone {
  name: string;
  brand: string;
  image: string;
  specs: string[];

  // these are assigned by the database
  id: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class PhoneApiService {

  constructor(private httpThang: HttpClient) { }

  // GET /api/phones
  getPhones() {
    return this.httpThang.get(
      `${environment.backendUrl}/api/phones`
    ).toPromise();
  }
  // POST /api/phones
  postPhones() {

  }
  // GET /api/phones/:id

  // DELETE /api/phones/:id

}
