import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinuComponent } from './sinu.component';

describe('SinuComponent', () => {
  let component: SinuComponent;
  let fixture: ComponentFixture<SinuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
