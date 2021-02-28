import { Component } from '@angular/core';

// ng g c home-area/sales --skip-tests

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.css']
})
export class SalesComponent {

    public desserts = ["Ice Cream", "Pavlova", "Eclair"];
    
    public fruits = [ // הציגו את האוסף הזה - גם שם וגם מחיר
        { name: "Apple", price: 3.5 },
        { name: "Banana", price: 4.7 },
        { name: "Peach", price: 5.2 }
    ];

    public dynamicStyling = {
        color: "green",
        fontWeight: "bold"
    };

    public isWeekend(): boolean {
        const now = new Date();
        const dayOfWeek = now.getDay() + 1;
        return dayOfWeek >= 6;
    }

}
