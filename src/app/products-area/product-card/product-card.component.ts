import { ProductModel } from './../models/product.model';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

// ng g c products-area/product-card --skip-tests

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

    @Input()
    public product: ProductModel;

    public imageUrl: string;

    public ngOnInit(): void {
        this.imageUrl = environment.productsUrl + "images/" + this.product.imageName;
    }

}
