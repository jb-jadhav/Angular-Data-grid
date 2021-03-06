import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterColumnComponent } from './filter-column.component';

describe('FilterColumnComponent', () => {
  let component: FilterColumnComponent;
  let fixture: ComponentFixture<FilterColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
