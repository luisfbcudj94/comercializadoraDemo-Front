import { AngularMaterialModule } from './../angular-material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AsideComponent } from './aside/aside.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputTimeComponent } from './input-time/input-time.component';
import { RelojComponent } from './reloj/reloj.component';
import { SelectCustomComponent } from './select-custom/select-custom.component';


@NgModule({
  declarations: [
    AsideComponent,
    ToolbarComponent,
    InputTimeComponent,
    RelojComponent,
    SelectCustomComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports:[
    AsideComponent,
    ToolbarComponent,
    InputTimeComponent,
    RelojComponent,
    SelectCustomComponent
  ]
})
export class SharedModule { }
