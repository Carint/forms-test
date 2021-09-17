import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRecordComponent } from './main-record.component';

describe('MainRecordComponent', () => {
  let component: MainRecordComponent;
  let fixture: ComponentFixture<MainRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
