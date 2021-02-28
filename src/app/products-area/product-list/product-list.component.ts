import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// ng g c products-area/product-list --skip-tests

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    public products: ProductModel[];

    public constructor(private myTitle: Title, private myHttp: HttpClient) { } // DI

    public async ngOnInit() {
        this.myTitle.setTitle("Products");
        try {
            this.products = await this.myHttp.get<ProductModel[]>(environment.productsUrl).toPromise();
        }
        catch(err) {
            alert(err);
        }
    }

    // public ngOnInit(): void {
    //     this.myTitle.setTitle("Products");

    //     // Create Observable object: 
    //     const myObservable = this.myHttp.get<ProductModel[]>(environment.productsUrl);

    //     // Go to server and get all products: 
    //     myObservable.subscribe(serverProducts => this.products = serverProducts, err => alert(err));
    // }

}
