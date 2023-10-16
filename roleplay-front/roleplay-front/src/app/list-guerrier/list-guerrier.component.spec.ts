import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGuerrierComponent } from './list-guerrier.component';

describe('ListGuerrierComponent', () => {
  let component: ListGuerrierComponent;
  let fixture: ComponentFixture<ListGuerrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGuerrierComponent]
    });
    fixture = TestBed.createComponent(ListGuerrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
