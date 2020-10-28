import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

export interface NewProduct {
  id: number
  name: string
  price: string
}

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  newProducts: NewProduct[]
  idProd
  nameProd = ''
  priceProd = ''

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<NewProduct[]>('http://localhost:3000/products')
      .subscribe(newproducts => {
        console.log("Response", newproducts);
        this.newProducts = newproducts
      })
  }

  addProd() {
    const newP: NewProduct = {
      id: +this.idProd,
      name: this.nameProd,
      price: this.priceProd
    }
    this.http.post<NewProduct>('http://localhost:3000/products', newP)
      .subscribe(prod => {
        this.newProducts.push(prod)
      })
    this.router.navigate(['']);
  }
}
