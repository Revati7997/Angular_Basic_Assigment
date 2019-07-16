import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SqrtPipe } from "./sqrt.pipe";
import { SimpleCSSDirective } from "./simple-css.directive";
import { EmployeeComponent } from "./employee/employee.component";
import { NavComponent } from "./nav/nav.component";
import { ProductsComponent } from "./products/products.component";
import { BannerOneComponent } from "./banner-one/banner-one.component";
import { BannerTwoComponent } from "./banner-two/banner-two.component";
import { BannerThreeComponent } from "./banner-three/banner-three.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { FooterComponent } from "./footer/footer.component";
import { BonsaiTreesComponent } from "./bonsai-trees/bonsai-trees.component";
import { BooksComponent } from "./books/books.component";
import { WatchesComponent } from "./watches/watches.component";
import { ArtifactsComponent } from "./artifacts/artifacts.component";

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    SimpleCSSDirective,
    EmployeeComponent,
    NavComponent,
    ProductsComponent,
    BannerOneComponent,
    BannerTwoComponent,
    BannerThreeComponent,
    ContactusComponent,
    FooterComponent,
    BonsaiTreesComponent,
    BooksComponent,
    WatchesComponent,
    ArtifactsComponent
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
