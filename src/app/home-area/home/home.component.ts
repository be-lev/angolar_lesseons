import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// ng g c home-area/home --skip-tests

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public constructor(private myTitle: Title) { }
    
    public ngOnInit(): void {
        this.myTitle.setTitle("Home");
    }

}
