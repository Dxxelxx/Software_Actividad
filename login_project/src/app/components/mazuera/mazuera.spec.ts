import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mazuera } from './mazuera';

describe('Mazuera', () => {
  let component: Mazuera;
  let fixture: ComponentFixture<Mazuera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mazuera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mazuera);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
