import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const BASE_URL='http://localhost:8083/api/daret/all';

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
