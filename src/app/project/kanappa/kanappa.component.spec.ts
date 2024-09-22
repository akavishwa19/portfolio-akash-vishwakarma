import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanappaComponent } from './kanappa.component';

describe('KanappaComponent', () => {
  let component: KanappaComponent;
  let fixture: ComponentFixture<KanappaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanappaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanappaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
