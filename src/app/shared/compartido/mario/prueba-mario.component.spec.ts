import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaMarioComponent } from './prueba-mario.component';

describe('PruebaMarioComponent', () => {
  let component: PruebaMarioComponent;
  let fixture: ComponentFixture<PruebaMarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaMarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaMarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
