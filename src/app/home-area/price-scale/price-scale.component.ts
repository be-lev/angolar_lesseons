import { Component } from '@angular/core';

// ng g c home-area/price-scale --skip-tests

@Component({
    selector: 'app-price-scale',
    templateUrl: './price-scale.component.html',
    styleUrls: ['./price-scale.component.css']
})
export class PriceScaleComponent {

    public price = 300;

}
