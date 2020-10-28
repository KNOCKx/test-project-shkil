import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
// import { UserService } from "./product-list.service";

export interface Product {
  id?: string
  name: string
  price: string
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['../app.component.scss']
})

export class ProductsListComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {}
  products: Product[] = []


  ngOnInit() {
    this.http.get<Product[]>('http://localhost:3000/products')
      .subscribe(products => {
        console.log("Response", products);
        this.products = products
      })
  }

  getNavigation(link, id){
    if(id === ''){
      this.router.navigate([link]);
    } else {
      this.router.navigate([link + '/' + id]);
    }
  }
}
