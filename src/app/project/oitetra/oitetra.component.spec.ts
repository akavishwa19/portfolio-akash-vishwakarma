import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OitetraComponent } from './oitetra.component';

describe('OitetraComponent', () => {
  let component: OitetraComponent;
  let fixture: ComponentFixture<OitetraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OitetraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OitetraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
