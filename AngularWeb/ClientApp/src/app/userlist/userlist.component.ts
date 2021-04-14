import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User, Role, Company } from './user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [DataService]
})
export class UserlistComponent implements OnInit {
  user: User = new User();   // изменяемый товар
  usersearch: User = new User();
  users: any = [];
  order_row: boolean = false;
  positions: any = [];
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
