import { Component } from '@angular/core';

// ng g c layout-area/footer --skip-tests

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    public currentYear = new Date().getFullYear();
}
