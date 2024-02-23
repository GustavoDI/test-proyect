import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwhPausasComponent } from './dwh-pausas.component';

describe('DwhPausasComponent', () => {
  let component: DwhPausasComponent;
  let fixture: ComponentFixture<DwhPausasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwhPausasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwhPausasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
