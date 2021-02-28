import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// ng g c about-area/about --skip-tests

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit {

    public constructor(private myTitle: Title) { }
    
    public slogans = [
        "Phrase 1...",
        "Phrase 2...",
        "Phrase 3...",
        "Phrase 4...",
        "Phrase 5...",
        "Phrase 6...",
        "Phrase 7...",
    ];
    
    public sloganToDisplay = "";
    
    public ngOnInit(): void {
        this.myTitle.setTitle("About");
        const now = new Date();
        const dayOfWeek = now.getDay();
        this.sloganToDisplay = this.slogans[dayOfWeek];
    }

}
