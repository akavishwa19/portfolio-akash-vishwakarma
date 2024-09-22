import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IicccComponent } from './iiccc.component';

describe('IicccComponent', () => {
  let component: IicccComponent;
  let fixture: ComponentFixture<IicccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IicccComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IicccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
