import { ProductModel } from './../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public product: ProductModel;
    public imageUrl: string;

    public constructor(private myActivatedRoute: ActivatedRoute, private myHttp: HttpClient) { }

    // public ngOnInit(): void {
    //     const id = +this.myActivatedRoute.snapshot.params.id;
    //     const observable = this.myHttp.get<ProductModel>(environment.productsUrlDelayed + id);
    //     observable.subscribe(product => {
    //         this.product = product;
    //         this.imageUrl = environment.productsUrl + "images/" + this.product.imageName;
    //     }, err => alert("Error: " + err.message));
    // }

    public async ngOnInit() {
        try {
            const id = +this.myActivatedRoute.snapshot.params.id;
            this.product = await this.myHttp.get<ProductModel>(environment.productsUrlDelayed + id).toPromise();
            this.imageUrl = environment.productsUrl + "images/" + this.product.imageName;
        }
        catch (err) {
            alert("Error: " + err.message)
        }
    }

}
