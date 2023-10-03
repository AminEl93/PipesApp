import { Component } from '@angular/core';

@Component({
    selector: 'app-basics-page',
    templateUrl: './basics-page.component.html',
    styleUrls: ['./basics-page.component.css']
})

export class BasicsPageComponent {
    public nameLower: string = 'amin';
    public nameUpper: string = 'AMIN';
    public fullName: string = 'aMiN eL mEZiAnI';

    public customDate: Date = new Date();
}
