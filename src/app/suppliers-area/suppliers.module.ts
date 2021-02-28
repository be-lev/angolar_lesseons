import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersComponent } from './sellers/sellers.component';

const routes: Routes = [
    { path: "", component: SellersComponent } // Route: "/suppliers" 
];

@NgModule({
    declarations: [SellersComponent],
    imports: [CommonModule, RouterModule.forChild(routes)] // forChild = relative route
})
export class SuppliersModule { }
