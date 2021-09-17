import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { MainRecordComponent } from './pages/new-record/main-record.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';

@NgModule({
  declarations: [
    MainRecordComponent,
    ClientInfoComponent
  ],
  exports: [
    MainRecordComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class MedicalRecordModule { }
