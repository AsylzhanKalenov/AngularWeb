import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Users, Role, Company } from './users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [DataService]
})
export class UserlistComponent implements OnInit {
  user: Users = new Users();   // изменяемый товар
  usersearch: Users = new Users();
  users: any = [];
  order_row: boolean = false;
  positions: any = [];
  router: Router;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadPositions();
    this.loadUsers();    // загрузка данных при старте компонента

  }
  // получаем данные через сервис
  loadUsers() {
    this.dataService.getProducts()
      .subscribe(data => this.users = data);
  }

  searchUser() {
    this.dataService.getSearchUser(this.usersearch)
      .subscribe(data => this.users = data);
  }

  loadPositions() {
    this.dataService.getPositions()
      .subscribe(data => this.positions = data);
  }
}
