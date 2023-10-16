import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsJoueurComponent } from './details-joueur.component';

describe('DetailsJoueurComponent', () => {
  let component: DetailsJoueurComponent;
  let fixture: ComponentFixture<DetailsJoueurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsJoueurComponent]
    });
    fixture = TestBed.createComponent(DetailsJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
