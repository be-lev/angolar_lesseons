import { Component, OnDestroy, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

    public time = "";
    public timer = 0;

    public dynamicStyling = { color: "" };

    // Object has been created:
    public constructor(private myColorsService: ColorsService) { }

    // Component is ready for use:
    public ngOnInit(): void {
        this.timer = window.setInterval(() => {
            const now = new Date();
            this.time = now.toLocaleTimeString();
            this.dynamicStyling = { color: this.myColorsService.getRandomColor() };
        }, 1000);
    }

    public ngOnDestroy(): void {
        clearInterval(this.timer);
    }
}
