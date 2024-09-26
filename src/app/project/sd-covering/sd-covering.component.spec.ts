import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdCoveringComponent } from './sd-covering.component';

describe('SdCoveringComponent', () => {
  let component: SdCoveringComponent;
  let fixture: ComponentFixture<SdCoveringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SdCoveringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdCoveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
