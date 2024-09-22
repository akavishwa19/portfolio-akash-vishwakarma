import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaimandirComponent } from './saimandir.component';

describe('SaimandirComponent', () => {
  let component: SaimandirComponent;
  let fixture: ComponentFixture<SaimandirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaimandirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaimandirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
