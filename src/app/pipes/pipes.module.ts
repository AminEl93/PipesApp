import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './pages/order/order.component';

import { CanFlyPipe } from './custom-pipes/can-fly.pipe';
import { ToggleCasePipe } from './custom-pipes/toggle-case.pipe';
import { SortByPipe } from './custom-pipes/sort-by.pipe';

@NgModule({
    declarations: [
        BasicsPageComponent,
        NumbersPageComponent,
        UncommonPageComponent,
        OrderComponent,

        // Custom Pipes
        CanFlyPipe,
        ToggleCasePipe,
        SortByPipe    
    ],
    imports: [
        CommonModule,
        PipesRoutingModule,
        PrimeNgModule
    ]
})

export class PipesModule { }
