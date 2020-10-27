import { Component, OnInit } from '@angular/core';
import {Product} from "../products-list/products-list.component";
import {HttpClient} from "@angular/common/http";

export interface EditProduct {
  id?: number
  name: string
  price: string
}



@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  editProducts: EditProduct[] = []

  constructor(private http: HttpClient ) {}


  ngOnInit(): void {

    let url = 'http://localhost:3000/products/'
    this.http.get<EditProduct[]>(url)
      .subscribe(editProducts => {
        console.log("Response", editProducts);
        this.editProducts = editProducts
      })
  }
}
