import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsGridComponent } from './dogs-grid.component';

describe('DogsGridComponent', () => {
  let component: DogsGridComponent;
  let fixture: ComponentFixture<DogsGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogsGridComponent]
    });
    fixture = TestBed.createComponent(DogsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
