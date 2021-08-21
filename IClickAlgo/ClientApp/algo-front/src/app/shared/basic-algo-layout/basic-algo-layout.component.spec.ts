import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAlgoLayoutComponent } from './basic-algo-layout.component';

describe('BasicAlgoLayoutComponent', () => {
  let component: BasicAlgoLayoutComponent;
  let fixture: ComponentFixture<BasicAlgoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAlgoLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAlgoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
