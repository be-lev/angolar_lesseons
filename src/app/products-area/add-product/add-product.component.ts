import { ProductModel } from './../models/product.model';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    public product = new ProductModel();
    public preview: string; // Image preview

    public constructor(private myHttp: HttpClient, private router: Router) { }

    public handleImage(image: Event): void {
        this.product.image = (image.target as HTMLInputElement).files[0];

        // Read the image into preview variable:
        const myFileReader = new FileReader(); // JavaScript object which can read files from the user computer
        myFileReader.onload = args => this.preview = args.target.result.toString(); // When complete reading - set the image into the preview variable
        myFileReader.readAsDataURL(this.product.image); // Start reading.
    }

    public addProduct(): void {

        const myFormData = new FormData();
        myFormData.append("name", this.product.name);
        myFormData.append("price", this.product.price.toString());
        myFormData.append("stock", this.product.stock.toString());
        myFormData.append("image", this.product.image);

        this.myHttp.post<ProductModel>(environment.productsUrl, myFormData)
            .subscribe(addedProduct => {
                alert("Product has been added, id: " + addedProduct.id);
                this.router.navigateByUrl("/products");
            }, err => alert("Error: " + err.message));
    }

}
