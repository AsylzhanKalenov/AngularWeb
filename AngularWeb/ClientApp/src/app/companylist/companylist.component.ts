import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Company } from '../company';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  providers: [DataService]
})
export class CompanylistComponent implements OnInit {

  company: Company = new Company();   // изменяемый товар
  companies: Company[];                // массив товаров
  tableMode: boolean = true;          // табличный режим

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadProducts();    // загрузка данных при старте компонента  
  }
  // получаем данные через сервис
  loadProducts() {
    this.dataService.getProducts()
      .subscribe((data: Company[]) => this.companies = data);
  }
  // сохранение данных
  save() {
    if (this.company.id == null) {
      this.dataService.createProduct(this.company)
        .subscribe((data: Company) => this.companies.push(data));
    } else {
      this.dataService.updateProduct(this.company)
        .subscribe(data => this.loadProducts());
    }
    this.cancel();
  }
  editProduct(p: Company) {
    this.company = p;
  }
  cancel() {
    this.company = new Company();
    this.tableMode = true;
  }
  delete(p: Company) {
    this.dataService.deleteProduct(p.id)
      .subscribe(data => this.loadProducts());
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }
}
