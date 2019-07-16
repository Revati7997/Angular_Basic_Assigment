import { Component, OnInit } from "@angular/core";
import { Products_artifact } from "./product-datatypes";
import { PRODUCTS } from "./product-details";
@Component({
  selector: "app-artifacts",
  templateUrl: "./artifacts.component.html",
  styleUrls: ["./artifacts.component.css"]
})
export class ArtifactsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("%c Initialization-Artifacts", "color:red");
    this.products = PRODUCTS;
  }

  products: Products_artifact[];
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
