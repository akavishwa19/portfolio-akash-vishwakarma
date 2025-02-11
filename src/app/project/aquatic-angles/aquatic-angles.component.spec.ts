import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaticAnglesComponent } from './aquatic-angles.component';

describe('AquaticAnglesComponent', () => {
  let component: AquaticAnglesComponent;
  let fixture: ComponentFixture<AquaticAnglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AquaticAnglesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AquaticAnglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
