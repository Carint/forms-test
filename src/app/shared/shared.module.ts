import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    MainMenuComponent,
    SidenavComponent
  ],
  exports: [
    MainMenuComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
