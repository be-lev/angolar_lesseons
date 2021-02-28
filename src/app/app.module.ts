import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout-area/layout/layout.component';
import { HeaderComponent } from './layout-area/header/header.component';
import { FooterComponent } from './layout-area/footer/footer.component';
import { MenuComponent } from './layout-area/menu/menu.component';
import { HomeComponent } from './home-area/home/home.component';
import { WishlistComponent } from './home-area/wishlist/wishlist.component';
import { FormsModule } from '@angular/forms';
import { SalesComponent } from './home-area/sales/sales.component';
import { GiftCardComponent } from './home-area/gift-card/gift-card.component';
import { ThumbnailComponent } from './shared-area/thumbnail/thumbnail.component';
import { PriceScaleComponent } from './home-area/price-scale/price-scale.component';
import { ClockComponent } from './home-area/clock/clock.component';
import { ProductListComponent } from './products-area/product-list/product-list.component';
import { AboutComponent } from './about-area/about/about.component';
import { Page404Component } from './shared-area/page404/page404.component';
import { ContactUsComponent } from './contact-us-area/contact-us/contact-us.component';
import { ColorsService } from './services/colors.service';
import { HttpClientModule } from "@angular/common/http";
import { ProductCardComponent } from './products-area/product-card/product-card.component';
import { ProductDetailsComponent } from './products-area/product-details/product-details.component';
import { AddProductComponent } from './products-area/add-product/add-product.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        HomeComponent,
        WishlistComponent,
        SalesComponent,
        GiftCardComponent,
        ThumbnailComponent,
        PriceScaleComponent,
        ClockComponent,
        ProductListComponent,
        AboutComponent,
        Page404Component,
        ContactUsComponent,
        ProductCardComponent,
        ProductDetailsComponent,
        AddProductComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [],
    // providers: [ColorsService], // הגדרה שאובייקט השירות הזה נגיש לכל הרכיבים בכל האתר
    bootstrap: [LayoutComponent]
})
export class AppModule { }
