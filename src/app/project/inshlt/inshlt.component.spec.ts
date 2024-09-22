import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InshltComponent } from './inshlt.component';

describe('InshltComponent', () => {
  let component: InshltComponent;
  let fixture: ComponentFixture<InshltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InshltComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InshltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
