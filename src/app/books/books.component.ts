import { Component, OnInit } from "@angular/core";
import { Products_books } from "./product-datatypes";
import { PRODUCTS } from "./product-details";
@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("%c Initialization-Books", "color:red");
    this.products = PRODUCTS;
  }

  products: Products_books[];
  upQuantity(product) {
    if (product.quantity < product.Instock) {
      product.quantity++;
    }
  }
  downQuantity(product) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }
}
