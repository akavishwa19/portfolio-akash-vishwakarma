import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XityComponent } from './xity.component';

describe('XityComponent', () => {
  let component: XityComponent;
  let fixture: ComponentFixture<XityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
