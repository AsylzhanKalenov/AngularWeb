import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../company';

@Injectable()
export class DataService {

  private url = "/api/companies1";

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get(this.url);
  }

  getProduct(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createProduct(product: Company) {
    return this.http.post(this.url, product);
  }
  updateProduct(product: Company) {

    return this.http.put(this.url, product);
  }
  deleteProduct(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
