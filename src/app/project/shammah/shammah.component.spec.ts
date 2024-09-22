import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShammahComponent } from './shammah.component';

describe('ShammahComponent', () => {
  let component: ShammahComponent;
  let fixture: ComponentFixture<ShammahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShammahComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShammahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
