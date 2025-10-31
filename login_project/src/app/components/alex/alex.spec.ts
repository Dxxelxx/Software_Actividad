import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alex } from './alex';

describe('Alex', () => {
  let component: Alex;
  let fixture: ComponentFixture<Alex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
