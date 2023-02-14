import { AngularMaterialModule } from './../angular-material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AsideComponent } from './aside/aside.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputTimeComponent } from './input-time/input-time.component';
import { PaginatorPipe } from './pipes/paginator.pipe';

@NgModule({
  declarations: [
    AsideComponent,
    ToolbarComponent,
    InputTimeComponent,
    PaginatorPipe
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports:[
    AsideComponent,
    ToolbarComponent,
    InputTimeComponent
  ]
})
export class SharedModule { }
