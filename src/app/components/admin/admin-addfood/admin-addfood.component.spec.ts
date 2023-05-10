import { ComponentFixture, TestBed } from '@angular/core/testing';

import {AdminAddfoodComponent } from './admin-addfood.component';

describe('AdminAddfoodComponent', () => {
  let component: AdminAddfoodComponent;
  let fixture: ComponentFixture<AdminAddfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {``
    fixture = TestBed.createComponent(AdminAddfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
