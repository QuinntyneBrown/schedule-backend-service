import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ComponentsComponent } from './components.component';

const declarables = [ComponentsComponent];
const providers = [];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class ComponentsModule { }
