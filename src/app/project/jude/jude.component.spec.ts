import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudeComponent } from './jude.component';

describe('JudeComponent', () => {
  let component: JudeComponent;
  let fixture: ComponentFixture<JudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JudeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
