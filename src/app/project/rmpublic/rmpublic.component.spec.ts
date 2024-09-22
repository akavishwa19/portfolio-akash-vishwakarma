import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmpublicComponent } from './rmpublic.component';

describe('RmpublicComponent', () => {
  let component: RmpublicComponent;
  let fixture: ComponentFixture<RmpublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmpublicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RmpublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
