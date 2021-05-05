import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Users, Role, Company } from '../users';
import { UserDocs } from './UserDocs';
import { CheckCat } from './CheckCat';
import { DocsService } from './docs-service';

@Component({
  selector: 'app-check-user',
  templateUrl: './check-user.component.html',
  styleUrls: ['./check-user.component.css'],
  providers: [DocsService]
})
export class CheckUserComponent implements OnInit {
  st: any;
  comm: any;
  mail: string;
  userid: number;
  title: string;
  onchstr: string;
  users: Users = new Users();
  userdocs: UserDocs = new UserDocs;

  constructor(private location: Location, private docsService: DocsService, private _Activatedroute: ActivatedRoute) {  }

  ngOnInit(): void {
    this.mail = this._Activatedroute.snapshot.paramMap.get("mail");
    this.userid = parseInt(this._Activatedroute.snapshot.paramMap.get("id"));
    console.log(this.location.getState());
    this.st = this.location.getState();

    this.loadUsers();
    this.loadDocs();


    console.log(this.users);
  }

  loadUsers(): void {
    this.docsService.getUser(this.mail)
      .subscribe((data: Users) => {
        if (data)
          this.users = data
      });
   
  }

  loadDocs(): void {
    this.docsService.GetUserDocByUserId(this.userid)
      .subscribe(data => this.userdocs = data);
  }

  sendComment(idcat: number, comment: string): void{
    var ch = new CheckCat();
    ch.userId = this.userid;
    ch.fileCatId = idcat;
    ch.comments = comment;
  }
  onTitleChange(num, val) {
    var ch = new CheckCat();
    ch.userId = this.userid;
    ch.fileCatId = num;
    ch.comments = val;
    console.log(ch);
    this.docsService.postComment(ch)
      .subscribe(data => this.comm = data);
  }
}
