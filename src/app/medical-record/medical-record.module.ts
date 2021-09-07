import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { MainRecordComponent } from './main-record/main-record.component';

@NgModule({
  declarations: [
    MainRecordComponent
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
