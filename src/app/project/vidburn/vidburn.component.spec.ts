import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidburnComponent } from './vidburn.component';

describe('VidburnComponent', () => {
  let component: VidburnComponent;
  let fixture: ComponentFixture<VidburnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VidburnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VidburnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
