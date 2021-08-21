import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionSortContainerComponent } from './selection-sort-container.component';

describe('SelectionSortContainerComponent', () => {
  let component: SelectionSortContainerComponent;
  let fixture: ComponentFixture<SelectionSortContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionSortContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionSortContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
