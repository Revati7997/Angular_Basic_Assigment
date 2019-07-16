import { Component, OnInit } from "@angular/core";
import { Products } from "./product-datatypes";
import { PRODUCTS } from "./product-details";
@Component({
  selector: "app-bonsai-trees",
  templateUrl: "./bonsai-trees.component.html",
  styleUrls: ["./bonsai-trees.component.css"]
})
export class BonsaiTreesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("%c Initialization-Bonsai", "color:red");
    this.products = PRODUCTS;
  }

  products: Products[];

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
