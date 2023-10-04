import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
    selector: 'pipes-order',
    templateUrl: './order.component.html'
})

export class OrderComponent {    

    public isUpperCase: boolean = false;
    public orderBy?: keyof Hero;

    public heroes: Hero[] = [
        {
            name: 'Superman',
            canFly: true,
            color: 'Azul'
        },
        {
            name: 'Batman',
            canFly: true,
            color: 'Negro'
        },
        {
            name: 'Spiderman',
            canFly: false,
            color: 'Rojo'
        },
        {
            name: 'Iron Man',
            canFly: true,
            color: 'Rojo'
        },
        {
            name: 'Linterna Verde',
            canFly: true,
            color: 'Verde'
        },
        {
            name: 'Black Panther',
            canFly: false,
            color: 'Negro'
        },
        {
            name: 'Hulk',
            canFly: false,
            color: 'Verde'
        },
        {
            name: 'Capitán América',
            canFly: false,
            color: 'Azul'
        },
    ]

    toggleUpperCase(): void {
        this.isUpperCase = !this.isUpperCase;
    }
    
    changeOrder(value: keyof Hero){
        this.orderBy = value;
    }
}
