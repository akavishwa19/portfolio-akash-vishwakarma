import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YmcaIndiaComponent } from './ymca-india.component';

describe('YmcaIndiaComponent', () => {
  let component: YmcaIndiaComponent;
  let fixture: ComponentFixture<YmcaIndiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YmcaIndiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YmcaIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
