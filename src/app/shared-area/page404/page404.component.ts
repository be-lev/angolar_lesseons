import { Component } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';

// ng g c shared-area/page404 --skip-tests

@Component({
    selector: 'app-page404',
    templateUrl: './page404.component.html',
    styleUrls: ['./page404.component.css'],
    // providers: [ColorsService] // הגדרה שאובייקט השירות יהיה ברמת הרכיב הזה בלבד
})
export class Page404Component {

    public dynamicStyling = { backgroundColor: "" };

    // DI - Dependency Injection:
    public constructor(private myColorsService: ColorsService) {
        this.changeColor();
    }

    public changeColor(): void {
        this.dynamicStyling = {
            backgroundColor: this.myColorsService.getRandomColor()
        };
    }
}
