import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Role, Company } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "https://localhost:44340/api/auth";
  private urlpos = "https://localhost:44340/api/positions";

  search? : string;
  
  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any>(this.url);
  }

  getProduct(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createProduct(product: User) {
    return this.http.post(this.url, product);
  }
  updateProduct(product: User) {

    return this.http.put(this.url, product);
  }
  deleteProduct(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
  getSearchUser(user: User) {
    this.search = '?name=' + user.name + '&company=' + user.company.name + '&position' + user.position.name;
    return this.http.get(this.url + '/getuser' + this.search);
  }
  getPositions(): Observable<any[]> {
    return this.http.get<any>(this.urlpos);
  }
}
