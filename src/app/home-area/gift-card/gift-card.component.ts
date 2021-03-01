import { Component } from '@angular/core';

// ng g c home-area/gift-card --skip-tests

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent {

    public amount = 50;
    public time = new Date();
    public minItems = 15;

}
