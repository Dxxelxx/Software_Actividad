import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Andres } from './andres';

describe('Andres', () => {
  let component: Andres;
  let fixture: ComponentFixture<Andres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Andres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Andres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
