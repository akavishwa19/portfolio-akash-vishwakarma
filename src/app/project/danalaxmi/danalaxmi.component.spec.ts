import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanalaxmiComponent } from './danalaxmi.component';

describe('DanalaxmiComponent', () => {
  let component: DanalaxmiComponent;
  let fixture: ComponentFixture<DanalaxmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DanalaxmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DanalaxmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
