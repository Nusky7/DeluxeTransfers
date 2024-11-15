import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPickupComponent } from './form-pickup.component';

describe('FormPickupComponent', () => {
  let component: FormPickupComponent;
  let fixture: ComponentFixture<FormPickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPickupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
