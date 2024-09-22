import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZestComponent } from './zest.component';

describe('ZestComponent', () => {
  let component: ZestComponent;
  let fixture: ComponentFixture<ZestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
