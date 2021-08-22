import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertionSortContainerComponent } from './insertion-sort-container.component';

describe('InsertionSortContainerComponent', () => {
  let component: InsertionSortContainerComponent;
  let fixture: ComponentFixture<InsertionSortContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertionSortContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertionSortContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
