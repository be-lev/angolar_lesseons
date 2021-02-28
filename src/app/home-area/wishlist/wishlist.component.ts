import { Component } from '@angular/core';

// ng g c home-area/wishlist --skip-tests

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

    public items = ["Wine", "Chocolate"];
    public hint = "Wishlist...";
    public newItem = "";

    public addItem(event: MouseEvent): void {
        console.log(event.target);
        // console.log(event.target);
        // console.log((event.target as HTMLButtonElement).innerHTML);
        this.items.push(this.newItem);
        this.newItem = "";
    }
}
