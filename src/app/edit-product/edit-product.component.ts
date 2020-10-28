import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {NewProduct} from "../new-product/new-product.component";


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

  names = {
    nameProd : '',
    priceProd : ''
  }
  id: number;
  private sub: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  editProd(){
    const editP: EditProduct = {
      name: this.names.nameProd,
      price: this.names.priceProd
    }


    this.http.put('http://localhost:3000/products/' + this.id, editP).subscribe(editedProd => editedProd)
    this.router.navigate(['']);
  };



  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id =+ params["id"]
    });

    this.http.get<EditProduct[]>('http://localhost:3000/products/' + this.id).subscribe(editProducts => {
      this.editProducts = editProducts
      console.log("Response", editProducts,"id", this.id), "sub", this.sub;

    });
  }





  deleteProd(){
    this.http.delete('http://localhost:3000/products/' + this.id).subscribe(
      res => console.log(res)
    )
    this.router.navigate(['']);
  };
  // logId(param){
  //   console.log(this.param.name)
  // }

}
