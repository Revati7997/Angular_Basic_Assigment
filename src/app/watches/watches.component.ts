import { Component, OnInit } from "@angular/core";
import { Products_watches } from "./product-datatypes";
import { PRODUCTS } from "./product-details";
@Component({
  selector: "app-watches",
  templateUrl: "./watches.component.html",
  styleUrls: ["./watches.component.css"]
})
export class WatchesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("%c Initialization-Watches", "color:red");
    this.products = PRODUCTS;
  }

  products: Products_watches[];
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
