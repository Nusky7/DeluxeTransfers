import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSlideComponent } from './car-slide.component';

describe('CarSlideComponent', () => {
  let component: CarSlideComponent;
  let fixture: ComponentFixture<CarSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarSlideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
