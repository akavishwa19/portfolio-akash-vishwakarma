import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XarkComponent } from './xark.component';

describe('XarkComponent', () => {
  let component: XarkComponent;
  let fixture: ComponentFixture<XarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
