import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AayraComponent } from './aayra.component';

describe('AayraComponent', () => {
  let component: AayraComponent;
  let fixture: ComponentFixture<AayraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AayraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AayraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
