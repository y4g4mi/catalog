import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const BASE_URL='https://reqres.in/api/users?page=2';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private http=inject(HttpClient);
  constructor() {  }

    getProducts(){
      return this.http.get(BASE_URL);
    }
 

}
