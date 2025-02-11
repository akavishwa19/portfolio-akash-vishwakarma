import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KannadamuhurthumComponent } from './kannadamuhurthum.component';

describe('KannadamuhurthumComponent', () => {
  let component: KannadamuhurthumComponent;
  let fixture: ComponentFixture<KannadamuhurthumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KannadamuhurthumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KannadamuhurthumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
