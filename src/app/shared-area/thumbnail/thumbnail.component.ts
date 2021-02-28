import { Component, Input } from '@angular/core';

// ng g c shared-area/thumbnail --skip-tests

@Component({
    selector: 'app-thumbnail',
    templateUrl: './thumbnail.component.html',
    styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {

    @Input() // יוכל לשלוח אליו ערך Parent Component-מחוץ לרכיב כך שה imageSource חשיפת המשתנה
    public imageSource = "";

    @Input()
    public imageTitle = "";

}
