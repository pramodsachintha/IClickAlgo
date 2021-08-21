import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAlgorithmsComponent } from './basic-algorithms.component';

describe('BasicAlgorithmsComponent', () => {
  let component: BasicAlgorithmsComponent;
  let fixture: ComponentFixture<BasicAlgorithmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAlgorithmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAlgorithmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
