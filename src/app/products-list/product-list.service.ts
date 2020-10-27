// import { Injectable } from '@angular/core';
// export interface Product {
//   id?: string
//   name: string
//   price: string
// }
//
// @Injectable({providedIn: 'root'})
// export class ProductListServiceService {
//
//   products: Product[] = []
//
//
//   ngOnInit() {
//
//     this.http.get<Product[]>('http://localhost:3000/products')
//       .subscribe(products => {
//         console.log("Response", products);
//         this.products = products
//       })
//   }
//   getNavigation(link, id){
//     if(id === ''){
//       this.router.navigate([link]);
//     } else {
//       this.router.navigate([link + '/' + id]);
//     }
//   }
//
// }
