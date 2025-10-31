import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arnol } from './arnol';

describe('Arnol', () => {
  let component: Arnol;
  let fixture: ComponentFixture<Arnol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arnol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arnol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
