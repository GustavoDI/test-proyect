import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarioRComponent } from './mario-r.component';

describe('MarioRComponent', () => {
  let component: MarioRComponent;
  let fixture: ComponentFixture<MarioRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarioRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarioRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
