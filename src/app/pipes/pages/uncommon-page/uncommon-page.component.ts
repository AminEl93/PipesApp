import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
    selector: 'app-uncommon-page',
    templateUrl: './uncommon-page.component.html',
    styleUrls: ['./uncommon-page.component.css']
})

export class UncommonPageComponent {

    // i18nSelectPipe
    public name: string = 'Amin';
    public gender: 'male' | 'female' = 'male';
    public invitationMap = {
        male: 'invitarlo',
        female: 'invitarla'
    }

    changeClient(): void {
        this.name = 'Laila';
        this.gender = 'female';
    }


    // i18nPluralPipe y SlicePipe
    public clients: string[] = ['Amin', 'Laila', 'Jamel', 'Iman', 'Gil', 'Anuar', 'Abdellah'];
    public clientsMap = {
        '=0': 'no tenemos ningún cliente esperando.',
        '=1': 'tenemos 1 cliente esperando.',
        'other': 'tenemos # clientes esperando.'
    }

    deleteClient(): void {
        this.clients.shift();
    }


    // KeyValuePipe y JsonPipe
    public person = {
        name: 'Amin',
        age: 30,
        address: 'Vic, Barcelona',
    }


    // AsyncPipe
    public myObservableTimer: Observable<number> = interval(2000)
        .pipe(
            tap( value => console.log('tap:', value) ),
    );

    public promiseValue: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( 'Tenemos datos en la promesa');
            console.log( 'Tenemos datos en la promesa');
            this.person.name = 'Laila'
        }, 3500);
    })
}
