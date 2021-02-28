import { AddProductComponent } from './products-area/add-product/add-product.component';
import { ContactUsComponent } from './contact-us-area/contact-us/contact-us.component';
import { AboutComponent } from './about-area/about/about.component';
import { HomeComponent } from './home-area/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products-area/product-list/product-list.component';
import { Page404Component } from './shared-area/page404/page404.component';
import { ProductDetailsComponent } from './products-area/product-details/product-details.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "products", component: ProductListComponent },
    { path: "products/new", component: AddProductComponent },
    { path: "products/:id", component: ProductDetailsComponent },
    { path: "suppliers", loadChildren: () => import("./suppliers-area/suppliers.module").then(m => m.SuppliersModule) }, // Lazy Loading
    { path: "about", component: AboutComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }, // pathMatch: "full" --> exact
    { path: "**", component: Page404Component } // Must be the last one
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // forRoot = the main route
    exports: [RouterModule]
})
export class AppRoutingModule { }
