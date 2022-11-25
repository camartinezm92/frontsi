import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionarComponent } from './relacionar.component';

describe('RelacionarComponent', () => {
  let component: RelacionarComponent;
  let fixture: ComponentFixture<RelacionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelacionarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
