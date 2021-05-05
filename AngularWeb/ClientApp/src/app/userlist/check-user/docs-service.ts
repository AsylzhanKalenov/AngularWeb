import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../users';
import { UserDocs } from './userdocs';
import { CheckCat } from './checkcat';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  private urlDocs = "https://localhost:44340/api/userdocs";
  private urlUsers = "https://localhost:44340/api/auth";
  private urlCheck = "https://localhost:44340/api/checkcats";


  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any>(this.urlDocs);
  }

  getProduct(id: number) {
    return this.http.get(this.urlDocs + '/' + id);
  }
  getUser(email: string): Observable<Users> {
    return this.http.get(this.urlUsers + '/' + email);
  }
  GetUserDocByUserId(id: number): Observable<UserDocs> {
    return this.http.get(this.urlDocs + '/GetUserDocByUserId?userid='+id)
  }
  postComment(check: CheckCat) {
    return this.http.post(this.urlCheck, check);
  }
}
