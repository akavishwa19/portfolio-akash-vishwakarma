import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeevComponent } from './veev.component';

describe('VeevComponent', () => {
  let component: VeevComponent;
  let fixture: ComponentFixture<VeevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
