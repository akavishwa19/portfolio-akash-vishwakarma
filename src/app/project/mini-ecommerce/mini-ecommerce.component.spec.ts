import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniEcommerceComponent } from './mini-ecommerce.component';

describe('MiniEcommerceComponent', () => {
  let component: MiniEcommerceComponent;
  let fixture: ComponentFixture<MiniEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniEcommerceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiniEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
