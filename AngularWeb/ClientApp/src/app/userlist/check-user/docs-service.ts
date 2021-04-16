import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDocs} from './userdocs';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  private url = "https://localhost:44340/api/userdocs";


  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any>(this.url);
  }

  getProduct(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createProduct(product: UserDocs) {
    return this.http.post(this.url, product);
  }
  updateProduct(product: UserDocs) {

    return this.http.put(this.url, product);
  }
  deleteProduct(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
  GetUserDocByUserId(product: UserDocs) {
    return this.http.get(this.url + '/GetUserDocByUserId?userid=7')
  }
}
