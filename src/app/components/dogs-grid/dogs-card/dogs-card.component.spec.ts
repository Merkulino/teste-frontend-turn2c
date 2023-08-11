import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsCardComponent } from './dogs-card.component';

describe('DogsCardComponent', () => {
  let component: DogsCardComponent;
  let fixture: ComponentFixture<DogsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogsCardComponent]
    });
    fixture = TestBed.createComponent(DogsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
