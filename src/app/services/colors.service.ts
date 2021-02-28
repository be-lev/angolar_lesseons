import { Injectable } from "@angular/core";

// הגדרה שאובייקט השירות הזה נגיש לכל הרכיבים בכל האתר
@Injectable({
    providedIn: "root"
})
export class ColorsService {
    public getRandomColor(): string {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
