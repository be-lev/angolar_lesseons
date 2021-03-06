import { ContactUsModel } from './models/contact-us.model';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

    public contactUs = new ContactUsModel();


    public constructor(private myTitle: Title) { }

    public ngOnInit(): void {
        this.myTitle.setTitle("Contact Us");
    }

}
